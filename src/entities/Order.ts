import User from "./User";
import OrderItem from "./OrderItem";
import Coupon from "./Coupon";

export default class Order {
  user: User;
  items: OrderItem[];

  constructor(user: User, items: OrderItem[] = []) {
    this.user = user;
    this.items = items;
  }

  addItem(item: OrderItem) {
    this.items.push(item);
  }

  applyCoupon(coupon: Coupon) {
    const total = this.getTotal();
    return total - total * (coupon.percentage / 100);
  }

  getTotal(): number {
    return this.items.reduce((total, orderItem) => total + orderItem.getTotal(), 0);
  }
}
