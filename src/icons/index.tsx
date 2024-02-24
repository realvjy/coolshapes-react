// stars
import {Star2} from "./stars/s_2";
import { Star1 } from "./stars/s_1";




const shapes =  {
  star: [Star1, Star2, Star2, Star2, Star2, Star2],
  polygon: [],
  flower : [],
  moon: [],
  elpise: [],
  wheel: [],
  triangle: [],
  misc: []
};

export const getRandomShape = (shapeType: keyof typeof shapes) => {
  const keys = Object.keys(shapes);
  const type = shapeType ||  keys[Math.floor(keys.length * Math.random())];
  const index = Math.floor(shapes[type].length * Math.random());
  console.log(type, index)
  return {
    type,
    index
  };
};

export default shapes;
