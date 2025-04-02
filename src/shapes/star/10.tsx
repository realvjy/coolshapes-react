import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient10 from "../../gradients/gradient-10";

const data: ComponentDataType = {
  shape:
    "M91.317 6.8l.028-.098c2.483-8.71 14.826-8.71 17.31 0l.027.098.083.293a122 122 0 0084.142 84.142l.293.082.098.028c8.709 2.484 8.709 14.826 0 17.31a5.593 5.593 0 01-.098.028l-.293.082c-40.751 11.541-72.602 43.391-84.142 84.142l-.083.293-.027.098c-2.484 8.709-14.827 8.709-17.31 0a21.647 21.647 0 01-.028-.098l-.082-.293a122.002 122.002 0 00-84.143-84.142l-.292-.082-.098-.028c-8.71-2.484-8.71-14.826 0-17.31l.098-.028.292-.082A122 122 0 0091.235 7.093l.082-.293z",

  gradient: Gradient10,
};
const Component = createShapeComponent("star-10", data);
export { data, Component as default };
