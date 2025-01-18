import { ellipseShapeData } from "./ellipse";
import { wheelShapeData } from "./wheel";
import { triangleShapeData } from "./triangle";
import { starShapeData } from "./star";
import { polygonShapeData } from "./polygon";
import { numberShapeData } from "./number";
import { rectangleShapeData } from "./rectangle";
import { moonShapeData } from "./moon";
import { miscShapeData } from "./misc";
import { flowerShapeData } from "./flower";

export default {
  ...ellipseShapeData,
  ...wheelShapeData,
  ...triangleShapeData,
  ...starShapeData,
  ...polygonShapeData,
  ...numberShapeData,
  ...rectangleShapeData,
  ...moonShapeData,
  ...miscShapeData,
  ...flowerShapeData,
};
