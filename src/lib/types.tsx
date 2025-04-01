import {
  ForwardRefExoticComponent,
  ReactElement,
  RefAttributes,
  SVGProps,
} from "react";
import { shapeTypes } from "./common";
import { shapesData } from "../index";
import { gradients } from "../gradientPresets";

export type Gradients = keyof typeof gradients;
export type GradientStop = {
  offset?: number | string;
  color: string;
  opacity?: number | string;
};

export type RadialGradientProps = {
  type: "radial";
  cx?: number | string;
  cy?: number | string;
  r?: number | string;
  fx?: number | string;
  fy?: number | string;
  fr?: number | string;
};

export type LinearGradientProps = {
  type: "linear";
  x1?: number | string;
  x2?: number | string;
  y1?: number | string;
  y2?: number | string;
};

export type GradientProp = Partial<{
  id: string;
  stops: GradientStop[] | string[];
  opacity: number | string;
  angle: number | string;
  gradientUnits: "userSpaceOnUse" | "objectBoundingBox";
  gradientTransform: string;
  spreadMethod: "pad" | "reflect" | "repeat";
}> &
  (
    | RadialGradientProps
    | LinearGradientProps
    | Omit<LinearGradientProps, "type">
  );

export type OutlineJoin = "bevel" | "miter" | "round";
export type OutlineCap = "butt" | "round" | "square";
export type ShapeElementType = ReactElement<
  | SVGPathElement
  | SVGCircleElement
  | SVGRectElement
  | SVGEllipseElement
  | SVGPolylineElement
  | SVGPolygonElement
>;

type GradientShapeProps = ShapeElementType | ShapeElementType[];

export type MaskShape = string | ShapeElementType | ShapeElementType[];

export interface MaskProps extends ShapeDataProps {
  shape: MaskShape;
  shapeId: string;
}

export interface ShapeDataProps {
  shape?: MaskShape;
  noise?: boolean | number;
  size?: string | number;
  gradient?:
    | Gradients
    | GradientProp[]
    | false
    | (GradientProp & { shapes?: GradientShapeProps })
    | {
        gradient?: GradientProp[];
        shapes?: GradientShapeProps;
      };
  gradientShapes?: GradientShapeProps | null;
  fill?: string;
  opacity?: number | string;
  fillOpacity?: number | string;
  blur?: number | string;
  transparent?: boolean;
  outline?: number;
  outlineColor?: string;
  outlineCap?: OutlineCap;
  outlineJoin?: OutlineJoin;
}

export type SvgProps = RefAttributes<SVGSVGElement> &
  Partial<SVGProps<SVGSVGElement>>;

export type ShapeProps = SvgProps & MaskProps;
export type Shape = ForwardRefExoticComponent<ShapeProps>;

type IndexProps = { index: number | string };

export type ShapesType = (typeof shapeTypes)[number];
export type ComponentDataType = {
  shape: MaskShape;
  blur?: number | string;
  gradientShapes?: ShapeElementType | ShapeElementType[] | null;
  gradient: GradientProp[] | keyof typeof gradients;
  transparent?: boolean;
  fillOpacity?: number | string;
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
