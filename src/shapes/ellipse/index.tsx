import * as Ellipse1 from "./1";
import * as Ellipse2 from "./2";
import * as Ellipse3 from "./3";
import * as Ellipse4 from "./4";
import * as Ellipse5 from "./5";
import * as Ellipse6 from "./6";
import * as Ellipse7 from "./7";
import * as Ellipse8 from "./8";
import * as Ellipse9 from "./9";
import * as Ellipse10 from "./10";
import * as Ellipse11 from "./11";
import * as Ellipse12 from "./12";

import { getComponentWithShapeType } from "../../lib/utils/shape";
export const ellipseShapeData = {
  "ellipse-1": Ellipse1.data,
  "ellipse-2": Ellipse2.data,
  "ellipse-3": Ellipse3.data,
  "ellipse-4": Ellipse4.data,
  "ellipse-5": Ellipse5.data,
  "ellipse-6": Ellipse6.data,
  "ellipse-7": Ellipse7.data,
  "ellipse-8": Ellipse8.data,
  "ellipse-9": Ellipse9.data,
  "ellipse-10": Ellipse10.data,
  "ellipse-11": Ellipse11.data,
  "ellipse-12": Ellipse12.data,
};
const Ellipse = getComponentWithShapeType(
  "ellipse",
  Object.values(ellipseShapeData)
);
export { Ellipse as default, Ellipse };
