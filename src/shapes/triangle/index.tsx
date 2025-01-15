import * as Triangle1 from "./1";
import * as Triangle2 from "./2";
import * as Triangle3 from "./3";
import * as Triangle4 from "./4";
import * as Triangle5 from "./5";
import * as Triangle6 from "./6";
import * as Triangle7 from "./7";
import * as Triangle8 from "./8";
import * as Triangle9 from "./9";
import * as Triangle10 from "./10";
import * as Triangle11 from "./11";
import * as Triangle12 from "./12";
import * as Triangle13 from "./13";
import * as Triangle14 from "./14";

import { getComponentWithShapeType } from "../../lib/utils/shape";

export const TriangleData = {
  "triangle-1": Triangle1.data,
  "triangle-2": Triangle2.data,
  "triangle-3": Triangle3.data,
  "triangle-4": Triangle4.data,
  "triangle-5": Triangle5.data,
  "triangle-6": Triangle6.data,
  "triangle-7": Triangle7.data,
  "triangle-8": Triangle8.data,
  "triangle-9": Triangle9.data,
  "triangle-10": Triangle10.data,
  "triangle-11": Triangle11.data,
  "triangle-12": Triangle12.data,
  "triangle-13": Triangle13.data,
  "triangle-14": Triangle14.data,
};

const Triangle = getComponentWithShapeType(
  "triangle",
  Object.values(TriangleData)
);

export { Triangle as default, Triangle };
