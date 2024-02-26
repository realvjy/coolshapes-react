// stars
import { Star2 } from "./stars/s_2";
import { Star1 } from "./stars/s_1";

// shapes to map the icon names for autocomplete and used to display random shapes
const shapes = {
  "star-1": Star1,
  "star-2": Star2,
};
// used to autocomplete types
export const iconTypes = ["star"];

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
