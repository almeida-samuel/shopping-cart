import CouponsRepository from "../../src/repositories/CouponsRepository";
import CouponFactory from "../factories/Coupon";

describe("CouponsRepository", () => {
  describe("methods", () => {
    describe("getAll", () => {
      it("should returns all coupons", () => {
        const repository = new CouponsRepository();
        expect(repository.getAll()).resolves.toStrictEqual([]);
      });
    });

    describe("getByCode", () => {
      it("should returns the coupon for the provided code", () => {
        const repository = new CouponsRepository();
        const coupon = CouponFactory.build();

        repository.coupons = [coupon];
        expect(repository.getByCode(coupon.code)).resolves.toStrictEqual(coupon);
      });

      it("should returns undefined for an not found code", () => {
        const repository = new CouponsRepository();
        expect(repository.getByCode("-1")).resolves.toStrictEqual(undefined);
      });
    });
  });
});
