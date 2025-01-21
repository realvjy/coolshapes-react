import {
  ForwardRefExoticComponent,
  ReactElement,
  RefAttributes,
  SVGProps,
} from "react";
import { shapeTypes } from "./common";
import { shapesData } from "../index";

export type ShapeElementType = ReactElement<
  | SVGPathElement
  | SVGCircleElement
  | SVGRectElement
  | SVGEllipseElement
  | SVGPolylineElement
  | SVGPolygonElement
>;

export type MaskShape = string | ShapeElementType | ShapeElementType[];

export interface MaskProps extends ShapeDataProps {
  shape: MaskShape;
  shapeId: string;
}

type GradientStop = {
  offset?: number | string;
  color: string;
  opacity?: number | string;
};
type LinearGradientProps = {
  type: "radial";
  cx?: number | string;
  cy?: number | string;
  r?: number | string;
  fx?: number | string;
  fy?: number | string;
  fr?: number | string;
};
type RadialGradientProps = {
  type: "linear";
  x1?: number | string;
  x2?: number | string;
  y1?: number | string;
  y2?: number | string;
};
export type GradientProp = {
  id?: string;
  stops?: GradientStop[];
  opacity?: number | string;
  angle?: number | string;
  gradientUnits?: "userSpaceOnUse" | "objectBoundingBox";
  gradientTransform?: string;
  spreadMethod?: "pad" | "reflect" | "repeat";
} & (LinearGradientProps | RadialGradientProps);

export interface ShapeDataProps {
  shape?: MaskShape;
  noise?: boolean | number;
  size?: string | number;
  gradient?:
    | GradientProp[]
    | false
    | (GradientProp & { shapes?: GradientProp | ShapeElementType[] })
    | {
        gradient?: GradientProp[];
        shapes?: ShapeElementType | ShapeElementType[];
      };
  gradientShapes?: ShapeElementType | ShapeElementType[] | null;
  fill?: string;
  opacity?: number | string;
  blur?: number | string;
  transparent?: boolean;
}

export type SvgProps = RefAttributes<SVGSVGElement> &
  Partial<SVGProps<SVGSVGElement>>;
export type Shape = ForwardRefExoticComponent<ShapeProps>;
export type ShapeProps = SvgProps & MaskProps;

type IndexProps = { index: number | string };

export type ShapesType = (typeof shapeTypes)[number];
export type ComponentDataType = {
  shape: MaskShape;
  blur?: number | string;
  gradientShapes?: ShapeElementType | ShapeElementType[] | null;
  gradient: GradientProp[];
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
