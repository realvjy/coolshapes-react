import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M199.98 102H.02a100.017 100.017 0 003.393 24h193.174a100.028 100.028 0 003.393-24zM195.422 130H4.578a99.448 99.448 0 008.8 20h173.244a99.45 99.45 0 008.8-20zM184.181 154H15.819a100.474 100.474 0 0012.767 16h142.828a100.431 100.431 0 0012.767-16zM167.262 174H32.738a100.267 100.267 0 0019.724 14h95.076a100.289 100.289 0 0019.724-14zM139.257 192H60.743c12.052 5.15 25.322 8 39.257 8 13.935 0 27.205-2.85 39.257-8zM199.98 98H.02a99.753 99.753 0 015.553-31h188.854a99.723 99.723 0 015.553 31zM192.932 63C178.223 26.087 142.158 0 100 0S21.777 26.087 7.068 63h185.864z",
  blur: 40,
  gradientShapes: (
    <>
      <ellipse
        cx="42.046"
        cy="157.679"
        fill="#FFC700"
        rx="73.46"
        ry="65.777"
        transform="rotate(-33.875 42.046 157.679)"></ellipse>
      <path fill="#FFE500" d="M110 32H18v68h92V32z"></path>
      <path fill="#FF001F" d="M133 0H17v98h116V0z"></path>
      <path fill="#18A0FB" d="M176 73H50v156h126V73z"></path>
      <path fill="#FF00D6" d="M213 44H83v101h130V44z"></path>
    </>
  ),
  opacity: 0.33,
  shapeFill: "#FAFF02",
  gradient: [],
};
const Component = createShapeComponent("ellipse-9", data);
export { data, Component as default };
