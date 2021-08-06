import { Factory } from "fishery";
import Dimension from "../../src/entities/Dimension";

export default Factory.define<Dimension>(() => {
  return new Dimension(10, 10, 10, 10);
});
