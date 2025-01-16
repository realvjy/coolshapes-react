import * as Misc1 from "./1";
import * as Misc2 from "./2";
import * as Misc3 from "./3";
import * as Misc4 from "./4";
import * as Misc5 from "./5";
import * as Misc6 from "./6";
import * as Misc7 from "./7";
import * as Misc8 from "./8";
import * as Misc9 from "./9";
import * as Misc10 from "./10";
import * as Misc11 from "./11";

import { getComponentWithShapeType } from "../../lib/utils/shape";
export const MiscData = {
  "misc-1": Misc1.data,
  "misc-2": Misc2.data,
  "misc-3": Misc3.data,
  "misc-4": Misc4.data,
  "misc-5": Misc5.data,
  "misc-6": Misc6.data,
  "misc-7": Misc7.data,
  "misc-8": Misc8.data,
  "misc-9": Misc9.data,
  "misc-10": Misc10.data,
  "misc-11": Misc11.data,
};
const Misc = getComponentWithShapeType("misc", Object.values(MiscData));
export { Misc as default, Misc };
