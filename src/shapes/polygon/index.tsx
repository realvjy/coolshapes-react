import * as Polygon1 from "./1";
import * as Polygon2 from "./2";
import * as Polygon3 from "./3";
import * as Polygon4 from "./4";
import * as Polygon5 from "./5";
import * as Polygon6 from "./6";
import * as Polygon7 from "./7";
import * as Polygon8 from "./8";

import { getComponentWithShapeType } from "../../lib/utils/shape";

export const PolygonData = {
  "polygon-1": Polygon1.data,
  "polygon-2": Polygon2.data,
  "polygon-3": Polygon3.data,
  "polygon-4": Polygon4.data,
  "polygon-5": Polygon5.data,
  "polygon-6": Polygon6.data,
  "polygon-7": Polygon7.data,
  "polygon-8": Polygon8.data,
};

const Polygon = getComponentWithShapeType(
  "polygon",
  Object.values(PolygonData)
);

export { Polygon as default, Polygon };
