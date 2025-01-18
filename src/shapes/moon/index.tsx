import * as Moon1 from "./1";
import * as Moon2 from "./2";
import * as Moon3 from "./3";
import * as Moon4 from "./4";
import * as Moon5 from "./5";
import * as Moon6 from "./6";
import * as Moon7 from "./7";
import * as Moon8 from "./8";
import * as Moon9 from "./9";
import * as Moon10 from "./10";
import * as Moon11 from "./11";
import * as Moon12 from "./12";
import * as Moon13 from "./13";
import * as Moon14 from "./14";
import * as Moon15 from "./15";

import { getComponentWithShapeType } from "../../lib/utils/shape";
export const moonShapeData = {
  "moon-1": Moon1.data,
  "moon-2": Moon2.data,
  "moon-3": Moon3.data,
  "moon-4": Moon4.data,
  "moon-5": Moon5.data,
  "moon-6": Moon6.data,
  "moon-7": Moon7.data,
  "moon-8": Moon8.data,
  "moon-9": Moon9.data,
  "moon-10": Moon10.data,
  "moon-11": Moon11.data,
  "moon-12": Moon12.data,
  "moon-13": Moon13.data,
  "moon-14": Moon14.data,
  "moon-15": Moon15.data,
};
const Moon = getComponentWithShapeType("moon", Object.values(moonShapeData));
export { Moon as default, Moon };
