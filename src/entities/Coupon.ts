export default class Coupon {
  code: string;
  percentage: number;
  expiresAt?: Date;

  constructor(code: string, percentage: number, expiresAt: Date) {
    this.code = code;
    this.percentage = percentage;
    this.expiresAt = expiresAt;
  }

  isExpired(): boolean {
    if (!this.expiresAt) return false;
    return new Date() > this.expiresAt;
  }
}
