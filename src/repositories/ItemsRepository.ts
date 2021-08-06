import Item from "../entities/Item";

export interface ItemsRepositoryInterface {
  getAll(): Promise<Item[]>
  getBySKU(sku?: string): Promise<Item>
}

export default class ItemsRepository implements ItemsRepositoryInterface {
  items: Item[]
  constructor() {
    this.items = [];
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
