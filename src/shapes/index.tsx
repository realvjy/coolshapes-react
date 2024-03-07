// stars
import { Star1 } from "./stars/s_1";
import { Star2 } from "./stars/s_2";
import { Star3 } from "./stars/s_3";
import { Star4 } from "./stars/s_4";
import { Star5 } from "./stars/s_5";
import { Star6 } from "./stars/s_6";
import { Star7 } from "./stars/s_7";
import { Star8 } from "./stars/s_8";
import { Star9 } from "./stars/s_9";
import { Star10 } from "./stars/s_10";
import { Star11 } from "./stars/s_11";
import { Star12 } from "./stars/s_12";
import { Star13 } from "./stars/s_13";
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
import { Flower1 } from "./flowers/f_1";
import { Flower2 } from "./flowers/f_2";
import { Flower3 } from "./flowers/f_3";
import { Flower4 } from "./flowers/f_4";
import { Flower5 } from "./flowers/f_5";
import { Flower6 } from "./flowers/f_6";
import { Flower7 } from "./flowers/f_7";
import { Flower8 } from "./flowers/f_8";
import { Flower9 } from "./flowers/f_9";
import { Flower10 } from "./flowers/f_10";
import { Flower11 } from "./flowers/f_11";
import { Flower12 } from "./flowers/f_12";
import { Flower13 } from "./flowers/f_13";
import { Flower14 } from "./flowers/f_14";
import { Flower15 } from "./flowers/f_15";
import { Flower16 } from "./flowers/f_16";
import { ShapeType } from "../lib";

const shapes = {
  star: [
    Star1,
    Star2,
    Star3,
    Star4,
    Star5,
    Star6,
    Star7,
    Star8,
    Star9,
    Star10,
    Star11,
    Star12,
    Star13,
  ],
  flower: [
    Flower1,
    Flower2,
    Flower3,
    Flower4,
    Flower5,
    Flower6,
    Flower7,
    Flower8,
    Flower9,
    Flower10,
    Flower11,
    Flower12,
    Flower13,
    Flower14,
    Flower15,
    Flower16,
  ],
  ellipse: [
    Ellipse1,
    Ellipse2,
    Ellipse3,
    Ellipse4,
    Ellipse5,
    Ellipse6,
    Ellipse7,
    Ellipse8,
    Ellipse9,
    Ellipse10,
    Ellipse11,
  ],
};
// used to autocomplete types
export type shapeTypes = keyof typeof shapes;

export type componentId = { shapeType: shapeTypes; index: number };
// return random shape from the shapes list
export const getRandomShape = ({
  type,
  onlyId,
}: {
  type?: keyof typeof shapes;
  onlyId?: boolean;
} = {}): ShapeType | componentId => {
  const shapeKeys = Object.keys(shapes);
  const shapeType: keyof typeof shapes =
    type ||
    (shapeKeys[
      Math.floor(Math.random() * shapeKeys.length)
    ] as keyof typeof shapes);

  const randomIndex = Math.floor(Math.random() * shapes[shapeType].length);
  if (onlyId) {
    return {
      shapeType,
      index: randomIndex,
    };
  }
  return shapes[shapeType][randomIndex];
};

export default shapes;
