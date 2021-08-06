import { Factory } from "fishery";
import UserFactory from "./User";
import Order from "../../src/entities/Order";

export default Factory.define<Order>(() => {
  return new Order(UserFactory.build());
});
