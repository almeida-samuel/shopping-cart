import ItemsRepository from "../../src/repositories/ItemsRepository";
import ItemFactory from "../factories/Item";

describe("ItemsRepository", () => {
  describe("methods", () => {
    describe("getAll", () => {
      it("should returns all coupons", () => {
        const repository = new ItemsRepository();
        expect(repository.getAll()).resolves.toStrictEqual([]);
      });
    });

    describe("getBySKU", () => {
      it("should returns the item for the provided sku", () => {
        const repository = new ItemsRepository();
        const item = ItemFactory.build();

        repository.items = [item];
        expect(repository.getBySKU(item.sku)).resolves.toStrictEqual(item);
      });

      it("should returns undefined for an not found sku", () => {
        const repository = new ItemsRepository();
        expect(repository.getBySKU("-1")).rejects.toThrow("Item SKU not found");
      });
    });
  });
});
