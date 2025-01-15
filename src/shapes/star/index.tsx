import * as Star1 from "./1";
import * as Star2 from "./2";
import * as Star3 from "./3";
import * as Star4 from "./4";
import * as Star5 from "./5";
import * as Star6 from "./6";
import * as Star7 from "./7";
import * as Star8 from "./8";
import * as Star9 from "./9";
import * as Star10 from "./10";
import * as Star11 from "./11";
import * as Star12 from "./12";
import * as Star13 from "./13";

import { getComponentWithShapeType } from "../../lib/utils/shape";

export const StarData = {
  "star-1": Star1.data,
  "star-2": Star2.data,
  "star-3": Star3.data,
  "star-4": Star4.data,
  "star-5": Star5.data,
  "star-6": Star6.data,
  "star-7": Star7.data,
  "star-8": Star8.data,
  "star-9": Star9.data,
  "star-10": Star10.data,
  "star-11": Star11.data,
  "star-12": Star12.data,
  "star-13": Star13.data,
};

const Star = getComponentWithShapeType("star", Object.values(StarData));

export { Star as default, Star };
