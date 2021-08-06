import Order from "../../entities/Order";

export interface ShipmentCostServiceInterface {
  calculate(
    order: Order,
    distance: number,
  ): Promise<number>
}

export default class ShipmentCostService implements ShipmentCostServiceInterface {
  static MINIMUM_SHIPMENT_COST = 10.00

  calculate(
      order: Order,
      distance: number, // in km
  ): Promise<number> {
    return new Promise((resolve) => {
      const cost = order.items.reduce((total, { item: { dimension } }) => {
        return total + distance * dimension.getVolumeInCubicMeters() * (dimension.getDensityInKilosPerCubicMeters() / 100);
      }, 0);
      resolve(Math.max(ShipmentCostService.MINIMUM_SHIPMENT_COST, cost));
    });
  }
}
