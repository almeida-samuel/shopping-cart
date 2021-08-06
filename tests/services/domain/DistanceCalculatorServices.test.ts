
import DistanceCalculatorService from "../../../src/services/domain/DistanceCalculatorService";

describe("DistanceCalculatorService", () => {
  describe("methods", () => {
    it("should calculate the distance between two zipcodes", () => {
      const service = new DistanceCalculatorService();

      expect(service.calculate("74690000", "7462000")).resolves.toBe(500);
    });
  });
});
