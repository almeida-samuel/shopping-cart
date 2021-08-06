import OrderFactory from "../factories/Order";
import OrderItemFactory from "../factories/OrderItem";

describe("Order", () => {
  describe("methods", () => {
    describe("addItem", () => {
      it("should add the item to the order items", () => {
        const orderItem = OrderItemFactory.build();
        const order = OrderFactory.build();

        order.addItem(orderItem);
        expect(order.items.length).toBe(1);
        expect(order.items[0]).toBe(orderItem);
      });
    });

    describe("getTotal", () => {
      it("should match the items sum totals", () => {
        const items = OrderItemFactory.buildList(30);
        const order = OrderFactory.build({ items });

        expect(order.getTotal()).toBe(items.reduce((total, item) => total + item.getTotal(), 0));
      });
    });
  });
});
