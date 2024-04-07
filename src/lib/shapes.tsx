import React, {
  ForwardRefExoticComponent,
  forwardRef,
  useEffect,
  useState,
} from "react";
import shapes, { getRandomShape, shapeTypes } from "../shapes";
import { ShapeProps, ShapeType } from "./iconBase";

interface ShapeOptions extends BaseShapeOptions {
  type?: shapeTypes;
}

interface BaseShapeOptions extends ShapeProps {
  index?: number;
  random?: boolean;
}

const Coolshape: ForwardRefExoticComponent<ShapeOptions> = forwardRef(
  (options, ref) => {
    const { type, index, random, ...rest } = options;

    if (index !== undefined && type && !random) {
      const Shape = shapes[type][index];
      return <Shape {...rest} ref={ref}/>
    }
    
    const [RandomShape, setRandomShape] = useState<ShapeType | null>(null);
    useEffect(() => {
        const shape = getRandomShape({ type }) as ShapeType;
        setRandomShape(shape);
    }, []);
    if (!RandomShape) {
      return null; 
    }
    return <RandomShape {...rest} ref={ref} />;
  }
);
Coolshape.displayName = "Coolshape";

const getComponentWithShape = (
  shapeType: keyof typeof shapes
): ForwardRefExoticComponent<BaseShapeOptions> => {
  const Component = forwardRef<SVGSVGElement, BaseShapeOptions>(
    (props, ref) => {
      return <Coolshape {...props} type={shapeType} ref={ref} />;
    }
  );
  Component.displayName = shapeType;
  return Component;
};

const Star = getComponentWithShape("star");
const Ellipse = getComponentWithShape("ellipse");
const Flower = getComponentWithShape("flower");
const Misc = getComponentWithShape("misc");
const Moon = getComponentWithShape("moon");
const Triangle = getComponentWithShape("triangle");
const Rectangle = getComponentWithShape("rectangle");
const Polygon = getComponentWithShape("polygon");
const Number = getComponentWithShape("number");

export {
  Coolshape,
  Star,
  Flower,
  Ellipse,
  Misc,
  Moon,
  Triangle,
  Rectangle,
  Polygon,
  Number,
};
