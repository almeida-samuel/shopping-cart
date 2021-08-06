import { DistanceCalculatorServiceInterface } from "../../src/services/domain/DistanceCalculatorService";

export default class DistanceCalculatorServiceFake implements DistanceCalculatorServiceInterface {
  calculate(originZipCode: string, destinyZipCode: string): Promise<number> {
    return new Promise((resolve) => resolve(500));
  }
}
