import * as Number0 from "./0";
import * as Number1 from "./1";
import * as Number2 from "./2";
import * as Number3 from "./3";
import * as Number4 from "./4";
import * as Number5 from "./5";
import * as Number6 from "./6";
import * as Number7 from "./7";
import * as Number8 from "./8";
import * as Number9 from "./9";

import { getComponentWithShapeType } from "../../lib/utils/shape";
export const NumberData = {
  "number-0": Number0.data,
  "number-1": Number1.data,
  "number-2": Number2.data,
  "number-3": Number3.data,
  "number-4": Number4.data,
  "number-5": Number5.data,
  "number-6": Number6.data,
  "number-7": Number7.data,
  "number-8": Number8.data,
  "number-9": Number9.data,
};
const Number = getComponentWithShapeType("number", Object.values(NumberData));
export { Number as default, Number };
