import * as Rectangle1 from "./1";
import * as Rectangle2 from "./2";
import * as Rectangle3 from "./3";
import * as Rectangle4 from "./4";
import * as Rectangle5 from "./5";
import * as Rectangle6 from "./6";
import * as Rectangle7 from "./7";
import * as Rectangle8 from "./8";
import * as Rectangle9 from "./9";

import { getComponentWithShapeType } from "../../lib/utils/shape";
export const RectangleData = {
  "rectangle-1": Rectangle1.data,
  "rectangle-2": Rectangle2.data,
  "rectangle-3": Rectangle3.data,
  "rectangle-4": Rectangle4.data,
  "rectangle-5": Rectangle5.data,
  "rectangle-6": Rectangle6.data,
  "rectangle-7": Rectangle7.data,
  "rectangle-8": Rectangle8.data,
  "rectangle-9": Rectangle9.data,
};
const Rectangle = getComponentWithShapeType(
  "rectangle",
  Object.values(RectangleData)
);
export { Rectangle as default, Rectangle };
