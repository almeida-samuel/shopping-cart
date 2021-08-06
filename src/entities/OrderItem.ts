import Item from "./Item";

export default class OrderItem {
  item: Item;
  quantity: number;


  constructor(item: Item, quantity: number) {
    this.item = item;
    this.quantity = quantity;
  }

  getTotal(): number {
    return this.item.price * this.quantity;
  }
}
