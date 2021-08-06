import Order from "../../entities/Order";
import OrderItem from "../../entities/OrderItem";
import { UsersRepositoryInterface } from "../../repositories/UsersRepository";
import { ItemsRepositoryInterface } from "../../repositories/ItemsRepository";
import { CouponsRepositoryInterface } from "../../repositories/CouponsRepository";
import { ShipmentCostServiceInterface } from "../../services/domain/ShipmentCostService";
import { DistanceCalculatorServiceInterface } from "../../services/domain/DistanceCalculatorService";
import { PlaceOrderInput, PlaceOrderOutput } from "./dtos";

export default class PlaceOrder {
  static COMPANY_STORAGE_CEP: "74690000";
  userRepository: UsersRepositoryInterface;
  itemsRepository: ItemsRepositoryInterface;
  couponsRepository: CouponsRepositoryInterface;
  distanceService: DistanceCalculatorServiceInterface;
  shipmentCostService: ShipmentCostServiceInterface;

  constructor(
      userRepository: UsersRepositoryInterface,
      couponsRepository: CouponsRepositoryInterface,
      itemsRepository: ItemsRepositoryInterface,
      distanceService: DistanceCalculatorServiceInterface,
      shipmentCostService: ShipmentCostServiceInterface,
  ) {
    this.userRepository = userRepository;
    this.itemsRepository = itemsRepository;
    this.couponsRepository = couponsRepository;
    this.distanceService = distanceService;
    this.shipmentCostService = shipmentCostService;
  }

  execute(input: PlaceOrderInput): Promise<PlaceOrderOutput> {
    return new Promise(async (resolve, reject) => {
      try {
        const coupon = await this.couponsRepository.getByCode(input.coupon);

        if (input.coupon && !coupon) throw new Error("Coupon not found");
        if (coupon && coupon.isExpired()) throw new Error("Expired coupon code");

        const user = await this.userRepository.getByCPF(input.cpf);
        const order = new Order(user);

        for (const i of input.items) {
          this.itemsRepository.getBySKU(i.sku)
              .then((item) => {
                const orderItem = new OrderItem(item, i.quantity);
                order.addItem(orderItem);
              })
              .catch((error) => reject(error));
        }

        const distance = await this.distanceService.calculate(PlaceOrder.COMPANY_STORAGE_CEP, user.zipcode);
        const freight = await this.shipmentCostService.calculate(order, distance);

        resolve(new PlaceOrderOutput({
          freight,
          total: coupon ? order.applyCoupon(coupon) : order.getTotal(),
        }));
      } catch (error) {
        debugger;
        reject(error);
      }
    });
  }
}

export {
  PlaceOrderInput,
  PlaceOrderOutput,
};
