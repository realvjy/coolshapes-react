// stars
import { Star2 } from "./stars/s_2";
import { Star1 } from "./stars/s_1";
import { Circle1 } from "./circles/c_1";
import { Circle2 } from "./circles/c_2";
import { Ellipse1 } from "./ellipse/e_1";
import { Ellipse2 } from "./ellipse/e_2";
import { Ellipse3 } from "./ellipse/e_3";
import { Ellipse4 } from "./ellipse/e_4";
import { Ellipse5 } from "./ellipse/e_5";
import { Ellipse6 } from "./ellipse/e_6";
import { Ellipse7 } from "./ellipse/e_7";
import { Ellipse8 } from "./ellipse/e_8";
import { Ellipse9 } from "./ellipse/e_9";
import { Ellipse10 } from "./ellipse/e_10";
import { Ellipse11 } from "./ellipse/e_11";
// shapes to map the shape names for autocomplete and used to display random shapes
const shapes = {
  star: [Star1, Star2],
  circle: [Circle1, Circle2],
  ellipse: [Ellipse1, Ellipse2, Ellipse3, Ellipse4, Ellipse5, Ellipse6, Ellipse7, Ellipse8, Ellipse9, Ellipse10, Ellipse11]
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
