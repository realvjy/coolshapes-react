import {
  ForwardRefExoticComponent,
  ReactElement,
  RefAttributes,
  SVGProps,
} from "react";

export type gradientShapeType = ReactElement<
  SVGPathElement | SVGCircleElement | SVGRectElement
>;

export interface MaskProps extends ShapeMetadataProps {
  shape: string;
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

export interface ShapeMetadataProps {
  shape?: string;
  bg?: string;
  background?: string;
  backgroundOpacity?: number | string;
  noise?: boolean | number;
  size?: string | number;
  gradient?: gradientType[];
  gradientShapes?: gradientShapeType | gradientShapeType[];
  shapeFill?: string;
  opacity?: number | string;
  outline?: string;
  outlineWidth?: string;
  outlineLineJoin?: "inherit" | "round" | "miter" | "bevel";
  blur?: number | string;
  transparent?: boolean;
}

export type SvgProps = RefAttributes<SVGSVGElement> &
  Partial<SVGProps<SVGSVGElement>>;
export type ShapeType = ForwardRefExoticComponent<ShapeProps>;
export type ShapeProps = SvgProps & MaskProps;
