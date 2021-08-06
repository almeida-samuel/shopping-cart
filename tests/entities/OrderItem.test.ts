import OrderItemFactory from "../factories/OrderItem";

describe("OrderItem", () => {
  describe("methods", () => {
    describe("getTotal", () => {
      it("should match price times quantity", () => {
        const orderItem = OrderItemFactory.build();
        expect(orderItem.getTotal()).toBe(orderItem.item.price * orderItem.quantity);
      });
    });
  });
});
