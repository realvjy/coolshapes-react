import { shapesType } from "../lib/common";
import { ShapeProps } from "../lib";
import { gradientShapeType, gradientType } from "../lib/types";

export type ShapesType = (typeof shapesType)[number];

export type ShapeOptions = Partial<ShapeProps> & {
  type?: ShapesType;
  index?: number;
  random?: boolean;
};

export type ComponentDataType = {
  shape: string;
  blur?: number | string;
  gradientShapes?: gradientShapeType | gradientShapeType[];
  gradient: gradientType[];
  transparent?: boolean;
  opacity?: number | string;
  shapeFill?: string;
};
