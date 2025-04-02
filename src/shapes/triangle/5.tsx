import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient79 from "../../gradients/gradient-79";

const data: ComponentDataType = {
  shape:
    "M54.42 55.018c15.258-26.783 22.887-40.175 32.976-44.454a32.263 32.263 0 0125.208 0c10.089 4.28 17.718 17.67 32.975 44.454l32.998 57.923c15.101 26.507 22.651 40.766 21.26 51.627-1.111 8.678-4.645 15.537-11.582 20.82C179.571 192 163.38 192 132.998 192H67.002c-30.382 0-46.573 0-55.256-6.612-6.938-5.283-10.472-12.142-11.583-20.82-1.39-10.861 6.16-25.12 21.26-51.627L54.42 55.018z",

  gradient: Gradient79,
};
const Component = createShapeComponent("triangle-5", data);
export { data, Component as default };
