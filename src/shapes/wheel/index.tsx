import * as Wheel1 from "./1";
import * as Wheel2 from "./2";
import * as Wheel3 from "./3";
import * as Wheel4 from "./4";
import * as Wheel5 from "./5";
import * as Wheel6 from "./6";
import * as Wheel7 from "./7";

import { getComponentWithShapeType } from "../../lib/utils/shape";
export const wheelShapeData = {
  "wheel-1": Wheel1.data,
  "wheel-2": Wheel2.data,
  "wheel-3": Wheel3.data,
  "wheel-4": Wheel4.data,
  "wheel-5": Wheel5.data,
  "wheel-6": Wheel6.data,
  "wheel-7": Wheel7.data,
};
const Wheel = getComponentWithShapeType("wheel", Object.values(wheelShapeData));
export { Wheel as default, Wheel };
