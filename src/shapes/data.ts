import { EllipseData } from "./ellipse";
import { WheelData } from "./wheel";
import { TriangleData } from "./triangle";
import { StarData } from "./star";
import { PolygonData } from "./polygon";
import { NumberData } from "./number";
import { RectangleData } from "./rectangle";
import { MoonData } from "./moon";
import { MiscData } from "./misc";
import { FlowerData } from "./flower";

export default {
  ...EllipseData,
  ...WheelData,
  ...TriangleData,
  ...StarData,
  ...PolygonData,
  ...NumberData,
  ...RectangleData,
  ...MoonData,
  ...MiscData,
  ...FlowerData,
};
