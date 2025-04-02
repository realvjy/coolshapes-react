import {
  ForwardRefExoticComponent,
  ReactElement,
  RefAttributes,
  SVGProps,
} from "react";
import { shapeTypes } from "./common";
import shapesData from "../shapes/data";
import { gradients } from "../gradients";

export type GradientPresets = keyof typeof gradients;
export type GradientStop = {
  offset?: number | string;
  color: string;
  opacity?: number | string;
};

export type RadialGradient = {
  type: "radial";
  cx?: number | string;
  cy?: number | string;
  r?: number | string;
  fx?: number | string;
  fy?: number | string;
  fr?: number | string;
};

export type LinearGradient = {
  type: "linear";
  x1?: number | string;
  x2?: number | string;
  y1?: number | string;
  y2?: number | string;
};

export type Gradient = Partial<{
  id: string;
  stops: GradientStop[] | string[];
  opacity: number | string;
  angle: number | string;
  gradientUnits: "userSpaceOnUse" | "objectBoundingBox";
  gradientTransform: string;
  spreadMethod: "pad" | "reflect" | "repeat";
}> &
  (RadialGradient | LinearGradient | Omit<LinearGradient, "type">);

export type OutlineJoin = "bevel" | "miter" | "round";
export type OutlineCap = "butt" | "round" | "square";

/**
 * Supported SVG shape elements that can be used as a shape mask or can be passed
 * a gradient shape element.
 */
export type ShapeElementTypes = ReactElement<
  | SVGPathElement
  | SVGCircleElement
  | SVGRectElement
  | SVGEllipseElement
  | SVGPolylineElement
  | SVGPolygonElement
>;

type ShapeElement = ShapeElementTypes | ShapeElementTypes[];

export type MaskShape = string | ShapeElement;

export interface MaskProps extends ShapeDataProps {
  shape: MaskShape;
  shapeId: string;
}

export interface OutlineProps {
  outline: number | string;
  outlineColor: string;
  outlineCap: OutlineCap;
  outlineJoin: OutlineJoin;
}

export type GradientProp =
  | Gradient[]
  | false
  | (Gradient & { shapes?: ShapeElement })
  | {
      gradient?: Gradient[];
      shapes?: ShapeElement;
      blur?: number | string;
    };

export interface ShapeDataProps
  extends Partial<OutlineProps>,
    Partial<{
      gradient: GradientProp;
      gradientShapes: ShapeElement | null;
    }> {
  shape?: MaskShape;
  noise?: boolean | number;
  size?: string | number;
  fill?: string;
  opacity?: number | string;
  fillOpacity?: number | string;
  blur?: number | string;
  transparent?: boolean;
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
  gradientShapes?: ShapeElementTypes | ShapeElementTypes[] | null;
  gradient: GradientProp;
  transparent?: boolean;
  fillOpacity?: number | string;
  fill?: string;
};
export type ShapeTypeProps = {
  type: ShapesType;
};

// Modified props for coolshape component
export type CoolshapeComponentProps = Partial<
  ShapeProps &
    IndexProps &
    ShapeTypeProps & {
      random: boolean;
      name: keyof typeof shapesData | string;
      gradient?: GradientProp | GradientPresets;
    }
>;

export type CategoryComponentProps = Partial<ShapeProps> & IndexProps;
