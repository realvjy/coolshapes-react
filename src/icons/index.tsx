// stars
import { Star2 } from "./stars/s_2";
import { Star1 } from "./stars/s_1";
import { Circle1 } from "./circles/c_1";
import { Circle2 } from "./circles/c_2";
// shapes to map the icon names for autocomplete and used to display random shapes
const shapes = {
  "star-1": Star1,
  "star-2": Star2,
  "circle-1": Circle1,
  "circle-2": Circle2,
};
// used to autocomplete types
export const shapeTypes = ["star", "circle"];

// return random shape from the icons list
export const getRandomShape = (type?: string) => {
  const keys = Object.keys(shapes) as Array<keyof typeof shapes>;
  const shapeKeys = type
    ? keys.filter((element) => element.startsWith(type))
    : keys;

  const RandomShape = shapeKeys[Math.floor(Math.random() * shapeKeys.length)];
  return RandomShape;
};

export default shapes;
