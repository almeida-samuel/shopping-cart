import { Factory } from "fishery";
import PlaceOrder, { PlaceOrderInput } from "../../src/useCases/PlaceOrder";
import UserFactory from "./User";
import CouponsRepositoryFake from "../fakes/CouponsRepositoryFake";
import DistanceCalculatorServiceFake from "../fakes/DistanceCalculatorServiceFake";
import ItemsRepositoryFake from "../fakes/ItemsRepositoryFake";
import ShipmentCostServiceFake from "../fakes/ShipmentCostServiceFake";
import UsersRepositoryFake from "../fakes/UsersRepositoryFake";

export default Factory.define<PlaceOrder>(() => {
  return new PlaceOrder(
      new UsersRepositoryFake(),
      new CouponsRepositoryFake(),
      new ItemsRepositoryFake(),
      new DistanceCalculatorServiceFake(),
      new ShipmentCostServiceFake(),
  );
});

export const PlaceOrderInputFactory = Factory.define<PlaceOrderInput>(() => {
  return new PlaceOrderInput({
    cpf: UserFactory.build().cpf,
    zipcode: UserFactory.build().zipcode,
    items: [{ sku: "SKU-1", quantity: 1 }],
    coupon: undefined,
  });
});
