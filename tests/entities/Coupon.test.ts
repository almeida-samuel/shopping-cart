import Coupon from "../factories/Coupon";

describe("Coupon", () => {
  describe("methods", () => {
    describe("isExpired", () => {
      it("should returns false for a non-expired coupon", () => {
        const expiresAtOneHourAhead = new Date(Date.now() + 3600000);
        const coupon = Coupon.build({ expiresAt: expiresAtOneHourAhead });

        expect(coupon.isExpired()).toBeFalsy();
      });

      it("should returns false for a coupon without expiresAt filled", () => {
        const coupon = Coupon.build({ expiresAt: undefined });
        expect(coupon.isExpired()).toBeFalsy();
      });

      it("should returns true for a expired coupon", () => {
        const coupon = Coupon.build({ expiresAt: new Date("Thu, 01 January 1970 00:00:00 GMT") });
        expect(coupon.isExpired()).toBeTruthy();
      });
    });
  });
});
