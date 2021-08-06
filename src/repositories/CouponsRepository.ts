import Coupon from "../entities/Coupon";

export interface CouponsRepositoryInterface {
  getAll(): Promise<Coupon[]>
  getByCode(code?: string): Promise<Coupon | undefined>
}

export default class CouponsRepository implements CouponsRepositoryInterface {
  coupons: Coupon[]
  constructor() {
    this.coupons = [];
  }

  getAll(): Promise<Coupon[]> {
    return new Promise((resolve) => resolve(this.coupons));
  }

  getByCode(code?: string): Promise<Coupon | undefined> {
    return new Promise((resolve) => {
      resolve(code ? this.coupons.find((e) => e.code === code) : undefined);
    });
  }
}
