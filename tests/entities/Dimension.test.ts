import DimensionFactory from "../factories/Dimension";

describe("Dimension", () => {
  describe("methods", () => {
    describe("getVolumeInCubicMeters", () => {
      it("should match the correct volume", () => {
        const dimension = DimensionFactory.build({height: 20, width: 15, deepness: 10});
        expect(dimension.getVolumeInCubicMeters()).toBe(0.003);
      });
    });

    describe("getDensityInKilosPerCubicMeters", () => {
      it("should match the correct density", () => {
        const dimension = DimensionFactory.build({height: 20, width: 15, deepness: 10, weight: 1});
        expect(dimension.getDensityInKilosPerCubicMeters()).toBe(333.3333333333333);
      });
    });
  });
});
