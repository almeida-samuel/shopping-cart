import { Factory } from "fishery";
import DimensionFactory from "./Dimension";
import Item from "../../src/entities/Item";

export default Factory.define<Item>(({ sequence }) => {
  return new Item(`SKU-${sequence}`, 10, `Item #${sequence}`, DimensionFactory.build());
});
