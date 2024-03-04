// stars
import { Star2 } from "./stars/s_2";
import { Star1 } from "./stars/s_1";
import { Circle1 } from "./circles/c_1";
import { Circle2 } from "./circles/c_2";
import { Ellipse1 } from "./ellipse/e_1";
// shapes to map the shape names for autocomplete and used to display random shapes
const shapes = {
  star: [Star1, Star2],
  circle: [Circle1, Circle2],
  ellipse: [Ellipse1]
};
// used to autocomplete types
export type shapeTypes = keyof typeof shapes;

// return random shape from the shapes list
export const getRandomShape = (type?: keyof typeof shapes) => {
  const shapeKeys = Object.keys(shapes);
  const shapeType: keyof typeof shapes =
    type ||
    (shapeKeys[
      Math.floor(Math.random() * shapeKeys.length)
    ] as keyof typeof shapes);

  const randomIndex = Math.floor(Math.random() * shapes[shapeType].length);

  return shapes[shapeType][randomIndex];
};

export default shapes;
