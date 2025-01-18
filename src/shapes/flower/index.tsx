import * as Flower1 from "./1";
import * as Flower2 from "./2";
import * as Flower3 from "./3";
import * as Flower4 from "./4";
import * as Flower5 from "./5";
import * as Flower6 from "./6";
import * as Flower7 from "./7";
import * as Flower8 from "./8";
import * as Flower9 from "./9";
import * as Flower10 from "./10";
import * as Flower11 from "./11";
import * as Flower12 from "./12";
import * as Flower13 from "./13";
import * as Flower14 from "./14";
import * as Flower15 from "./15";
import * as Flower16 from "./16";

import { getComponentWithShapeType } from "../../lib/utils/shape";
export const flowerShapeData = {
  "flower-1": Flower1.data,
  "flower-2": Flower2.data,
  "flower-3": Flower3.data,
  "flower-4": Flower4.data,
  "flower-5": Flower5.data,
  "flower-6": Flower6.data,
  "flower-7": Flower7.data,
  "flower-8": Flower8.data,
  "flower-9": Flower9.data,
  "flower-10": Flower10.data,
  "flower-11": Flower11.data,
  "flower-12": Flower12.data,
  "flower-13": Flower13.data,
  "flower-14": Flower14.data,
  "flower-15": Flower15.data,
  "flower-16": Flower16.data,
};
const Flower = getComponentWithShapeType(
  "flower",
  Object.values(flowerShapeData)
);
export { Flower as default, Flower };
