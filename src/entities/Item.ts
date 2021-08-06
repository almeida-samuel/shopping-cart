import Dimension from "./Dimension";

export default class Item {
  sku: string;
  price: number;
  description: string;
  dimension: Dimension;

  constructor(sku: string, price: number, description: string, dimension: Dimension) {
    this.sku = sku;
    this.price = price;
    this.description = description;
    this.dimension = dimension;
  }
}
