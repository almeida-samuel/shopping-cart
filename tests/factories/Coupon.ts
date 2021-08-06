import { Factory } from "fishery";
import Coupon from "../../src/entities/Coupon";

export default Factory.define<Coupon>(({ sequence }) => {
  return new Coupon(`COUPON-${sequence}`, 10, new Date());
});
