import React, { ForwardRefExoticComponent, forwardRef, useEffect, useState } from "react";
import shapes, { getRandomShape, iconTypes } from "./icons";
import { ShapeProps } from "./lib/iconBase";
export * from './icons/stars/s_1'
export * from './icons/stars/s_2'

export interface ShapeOptions extends ShapeProps  {
  type?: typeof iconTypes[number];
  shape: keyof typeof shapes;
  random?: boolean;
  size?: number;
  noise?: boolean;
};

const Coolshape: ForwardRefExoticComponent<ShapeOptions>  = forwardRef ((options, ref) => {
  const {type,shape, random, ...rest} = options;
  const [shapeName, setShapeName] = useState<keyof typeof shapes>(shape);
  useEffect(()=>{
    if (random || !shapeName){
      const iconName = getRandomShape(type);
      setShapeName(iconName)
    }
  },[])

  if (!shapeName){
    return null
  }
  const Shape = shapes[shapeName];
  return <Shape ref={ref} {...rest} />
});


Coolshape.displayName = 'Coolshape';

export { Coolshape};