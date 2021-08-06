export interface DistanceCalculatorServiceInterface {
  calculate(originZipCode: string, destinyZipCode: string): Promise<number>;
}


export default class DistanceCalculatorService implements DistanceCalculatorServiceInterface {
  calculate(_: string, __: string): Promise<number> {
    return new Promise((resolve) => resolve(500));
  }
}
