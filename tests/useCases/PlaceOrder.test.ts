import UserFactory from "../factories/User";
import CouponFactory from "../factories/Coupon";
import PlaceOrderFactory, { PlaceOrderInputFactory } from "../factories/PlaceOrder";
import CouponsRepositoryFake from "../fakes/CouponsRepositoryFake";
import { PlaceOrderOutput } from "../../src/useCases/PlaceOrder";

describe("PlaceOrder", () => {
  describe("methods", () => {
    describe("execute", () => {
      it("should apply discount code", () => {
        const user = UserFactory.build();
        const coupon = CouponFactory.build({ isExpired: () => false });
        const input = PlaceOrderInputFactory.build({ coupon: coupon.code, cpf: user.cpf });
        const output = new PlaceOrderOutput({ total: 9, freight: 50 });

        const couponsRepository = new CouponsRepositoryFake();
        couponsRepository.addCoupon(coupon);

        const placeOrder = PlaceOrderFactory.build({
          couponsRepository: couponsRepository,
        });

        expect(placeOrder.execute(input)).resolves.toStrictEqual(output);
      });

      it("should returns error for an expired coupon code", () => {
        const user = UserFactory.build();
        const coupon = CouponFactory.build({ isExpired: () => true });
        const input = PlaceOrderInputFactory.build({ coupon: coupon.code, cpf: user.cpf });

        const couponsRepository = new CouponsRepositoryFake();
        couponsRepository.addCoupon(coupon);

        const placeOrder = PlaceOrderFactory.build({
          couponsRepository: couponsRepository,
        });

        expect(placeOrder.execute(input)).rejects.toThrow("Expired coupon code");
      });

      it("should returns error for a not found user", () => {
        const placeOrder = PlaceOrderFactory.build();
        const input = PlaceOrderInputFactory.build({ cpf: "00000000000" }); ;

        expect(placeOrder.execute(input)).rejects.toThrow("User CPF not found");
      });

      it("should returns error for a not found coupon code", () => {
        const placeOrder = PlaceOrderFactory.build();
        const input = PlaceOrderInputFactory.build({ coupon: "-1" });

        expect(placeOrder.execute(input)).rejects.toThrow("Coupon not found");
      });

      it("should returns error for a not found item", () => {
        const placeOrder = PlaceOrderFactory.build();
        const user = UserFactory.build();
        const input = PlaceOrderInputFactory.build({ cpf: user.cpf, items: [{ sku: "0", quantity: 1}] });

        expect(placeOrder.execute(input)).rejects.toThrow("Item SKU not found");
      });
    });
  });
});
