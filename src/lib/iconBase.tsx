import React, {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  forwardRef,
} from "react";
import NoiseMask from "./noiseMask";
import defaultProps from "./defaultProps";

interface BaseProps extends ComponentPropsWithRef<"svg"> {
  size?: number;
  noise?: boolean;
  iconName: string;
}

const ShapeBase = forwardRef<SVGSVGElement, BaseProps>((props, ref) => {
  const { size, noise = true, iconName, children, ...rest } = props;
  
  return (
    <svg ref={ref} {...defaultProps} {...rest} width={size} height={size}>
      {children}
      {<NoiseMask showNoise={noise} id={iconName} />}
    </svg>
  );
});



export type ShapeType = ForwardRefExoticComponent<BaseProps>;
export default ShapeBase;