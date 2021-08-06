import { Factory } from "fishery";
import ItemFactory from "./Item";
import OrderItem from "../../src/entities/OrderItem";

export default Factory.define<OrderItem>(() => {
  return new OrderItem(ItemFactory.build(), 1);
});
