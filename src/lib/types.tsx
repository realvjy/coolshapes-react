import {
  ForwardRefExoticComponent,
  ReactElement,
  RefAttributes,
  SVGProps,
} from "react";
import { shapesType } from "./common";
import { shapesData } from "../index";

export type gradientShapeType = ReactElement<
  SVGPathElement | SVGCircleElement | SVGRectElement
>;

export type ShapePathType = string | gradientShapeType | gradientShapeType[];
export interface MaskProps extends ShapeMetadataProps {
  shape: ShapePathType;
  shapeId: string;
}

type gradientStop = {
  offset?: number | string;
  color: string;
  opacity?: number | string;
};

export type gradientType = {
  type?: "linear" | "radial" | string;
  stops?: gradientStop[];
  opacity?: number | string;
  angle?: number | string;
  id?: number | string;
  x1?: number | string;
  x2?: number | string;
  y1?: number | string;
  y2?: number | string;
  cx?: number | string;
  cy?: number | string;
  r?: number | string;
  gradientTransform?: string;
};

export type ShapeOutline = {
  color: string;
  width?: string;
  lineJoin?: "inherit" | "round" | "miter" | "bevel";
};
export interface ShapeMetadataProps {
  shape?: ShapePathType;
  noise?: boolean | number;
  size?: string | number;
  gradient?:
    | gradientType[]
    | false
    | (gradientType & { shapes?: gradientType | gradientShapeType[] })
    | {
        gradient?: gradientType[];
        shapes?: gradientShapeType | gradientShapeType[];
      };
  gradientShapes?: gradientShapeType | gradientShapeType[] | null;
  fill?: string;
  opacity?: number | string;
  blur?: number | string;
  transparent?: boolean;
}

export type SvgProps = RefAttributes<SVGSVGElement> &
  Partial<SVGProps<SVGSVGElement>>;
export type ShapeType = ForwardRefExoticComponent<ShapeProps>;
export type ShapeProps = SvgProps & MaskProps;

type IndexProps = { index: number | string };

export type ShapesType = (typeof shapesType)[number];
export type ComponentDataType = {
  shape: ShapePathType;
  blur?: number | string;
  gradientShapes?: gradientShapeType | gradientShapeType[] | null;
  gradient: gradientType[];
  transparent?: boolean;
  opacity?: number | string;
  fill?: string;
};
export type ShapeTypeProps = {
  type: ShapesType;
};

export type CoolshapeComponentProps = Partial<
  ShapeProps &
    IndexProps &
    ShapeTypeProps & {
      random: boolean;
      name: keyof typeof shapesData | string;
    }
>;

export type CategoryComponentProps = Partial<ShapeProps> & IndexProps;
