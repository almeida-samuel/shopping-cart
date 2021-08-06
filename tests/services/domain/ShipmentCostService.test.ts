
import ShipmentCostService from "../../../src/services/domain/ShipmentCostService";
import OrderFactory from "../../factories/Order";
import OrderItemFactory from "../../factories/OrderItem";

describe("ShipmentCostService", () => {
  describe("methods", () => {
    describe("calculate", () => {
      it("should calculate the shipment cost for a order", () => {
        const service = new ShipmentCostService();
        const items = OrderItemFactory.buildList(10);
        const order = OrderFactory.build({ items: items });

        expect(service.calculate(order, 1000)).resolves.toBe(1000);
      });

      it("should calculate the minimum shipment cost for a order", () => {
        const service = new ShipmentCostService();
        const order = OrderFactory.build();

        expect(service.calculate(order, 1000)).resolves.toBe(10);
      });
    });
  });
});
