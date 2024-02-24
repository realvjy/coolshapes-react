import React, { FC, SVGProps, useEffect, useState } from "react";

import shapes, { getRandomShape } from "./icons";
export * from './icons/stars/s_1'
export * from './icons/stars/s_2'


function Coolshape (options: ShapeOptions) {
  const [shapeType, setShapeType] = useState<keyof typeof shapes | null>(options.type);
  const [shapeIndex, setShapeIndex] = useState<number | null>(options.index);

  useEffect(() => {
    if (options.random || !(shapeType && shapeIndex)) {
      const randomShape = getRandomShape(options.type);
      setShapeType(randomShape.type);
      setShapeIndex(randomShape.index);
    };

  }, []);

  if (!shapeType || !shapeIndex) {
    return null;
  }

  const Shape = shapes[shapeType][shapeIndex];
  return <Shape iconName={`${shapeType}-${shapeIndex}`} {...options} />;
}


interface ShapeOptions {
  type: keyof typeof shapes;
  index: number;
  random: boolean;
  size: number;
  noise: boolean;
};


export default Coolshape;

