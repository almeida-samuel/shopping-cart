import { Factory } from "fishery";
import User from "../../src/entities/User";

export default Factory.define<User>(() => {
  return new User("00170448045", "74690000");
});
