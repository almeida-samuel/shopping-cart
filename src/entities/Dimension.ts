export default class Dimension {
  weight: number;
  height: number;
  width: number;
  deepness: number;

  constructor(weight: number, height: number, width: number, deepness: number) {
    this.weight = weight;
    this.height = height;
    this.width = width;
    this.deepness = deepness;
  }

  getVolumeInCubicMeters(): number {
    return (this.height * this.width * this.deepness) / 1000000;
  }

  getDensityInKilosPerCubicMeters(): number {
    return this.weight / this.getVolumeInCubicMeters();
  }
}
