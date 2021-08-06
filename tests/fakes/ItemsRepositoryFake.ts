import Item from "../../src/entities/Item";
import ItemFactory from "../factories/Item";
import { ItemsRepositoryInterface } from "../../src/repositories/ItemsRepository";

export default class ItemsRepositoryFake implements ItemsRepositoryInterface {
  items: Item[]
  constructor() {
    this.items = ItemFactory.buildList(10);
  }

  getAll(): Promise<Item[]> {
    return new Promise((resolve) => resolve(this.items));
  }

  getBySKU(sku?: string): Promise<Item> {
    return new Promise((resolve, reject) => {
      const item = this.items.find((e) => e.sku === sku);
      item ? resolve(item) : reject(new Error("Item SKU not found"));
    });
  }
}
