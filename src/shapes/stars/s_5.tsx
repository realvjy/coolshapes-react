import { createShapeComponent } from "../../lib/utils/shape";

import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M115.13 60.52L100 0 84.87 60.52 46.26 46.26l14.262 38.61L0 100l60.521 15.13-14.26 38.61 38.609-14.261L100 200l15.13-60.522 38.611 14.262-14.261-38.61L200 100l-60.521-15.13 14.261-38.61-38.61 14.26z",
  gradient: [
    {
      cx: "0",
      cy: "0",
      r: "1",
      gradientTransform: "rotate(116.694 71.023 87.946) scale(199.234)",
      type: "radial",
      stops: [
        {
          color: "#FFF500",
          offset: 0,
        },
        {
          color: "#FF00D6",
          offset: "1",
          opacity: "0",
        },
      ],
    },
    {
      cx: "0",
      cy: "0",
      r: "1",
      gradientTransform: "rotate(48.452 -12.085 35.502) scale(223.143)",
      type: "radial",
      stops: [
        {
          color: "#FF00D6",
          offset: 0,
        },
        {
          color: "#FF7171",
          offset: "0.461",
          opacity: "0.84",
        },
        {
          color: "#FFF500",
          offset: "1",
          opacity: "0",
        },
      ],
    },
  ],
};
const Component = createShapeComponent("star-5", data);
export { data, Component as default };
