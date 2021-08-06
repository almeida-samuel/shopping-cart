import Coupon from "../../src/entities/Coupon";
import CouponFactory from "../factories/Coupon";
import CouponsRepository from "../../src/repositories/CouponsRepository";


export default class CouponsRepositoryFake extends CouponsRepository {
  coupons: Coupon[]
  constructor() {
    super();
    this.coupons = [
      CouponFactory.build({ code: "EXPIRED", isExpired: true }),
      CouponFactory.build({ code: "TEST", isExpired: false, percentage: 10 }),
    ];
  }

  addCoupon(coupon: Coupon) {
    this.coupons.push(coupon);
  }
}
