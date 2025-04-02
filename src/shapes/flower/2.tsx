import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient15 from "../../gradients/gradient-15";

const data: ComponentDataType = {
  shape:
    "M106.086 101.973c125.219 40.51 75.067 109.249-2.324 3.183C181.153 211.222 100 237.478 100 106.372c0 131.106-81.146 104.85-3.762-1.216-77.384 106.066-127.543 37.327-2.324-3.183-125.219 40.51-125.219-44.478 0-3.94-125.219-40.517-75.06-109.257 2.324-3.184C18.854-11.224 100-37.48 100 93.633c0-131.113 81.153-104.857 3.762 1.216 77.391-106.073 127.543-37.333 2.324 3.183 125.219-40.516 125.219 44.451 0 3.941z",

  gradient: Gradient15,
};
const Component = createShapeComponent("flower-2", data);
export { data, Component as default };
