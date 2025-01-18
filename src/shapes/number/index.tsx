import * as NumberShape0 from "./0";
import * as NumberShape1 from "./1";
import * as NumberShape2 from "./2";
import * as NumberShape3 from "./3";
import * as NumberShape4 from "./4";
import * as NumberShape5 from "./5";
import * as NumberShape6 from "./6";
import * as NumberShape7 from "./7";
import * as NumberShape8 from "./8";
import * as NumberShape9 from "./9";

import { getComponentWithShapeType } from "../../lib/utils/shape";
export const numberShapeData = {
  "number-0": NumberShape0.data,
  "number-1": NumberShape1.data,
  "number-2": NumberShape2.data,
  "number-3": NumberShape3.data,
  "number-4": NumberShape4.data,
  "number-5": NumberShape5.data,
  "number-6": NumberShape6.data,
  "number-7": NumberShape7.data,
  "number-8": NumberShape8.data,
  "number-9": NumberShape9.data,
};
const NumberShape = getComponentWithShapeType(
  "number",
  Object.values(numberShapeData)
);
export { NumberShape as default, NumberShape };
