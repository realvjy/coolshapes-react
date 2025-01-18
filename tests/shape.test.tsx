/* eslint-disable  @typescript-eslint/no-explicit-any */
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import { ShapeBase } from "../src/lib";
import data from "../src/shapes/data";

describe("Using every shape data from the defined shape data list", () => {
  Object.entries(data).forEach(([shapeKey, shapeData]) => {
    const props = {
      ...shapeData,
      className: "shape",
      "data-testid": shapeKey,
      size: 20,
      shapeId: shapeKey,
    };

    it(`${shapeKey} icon component renders and has all parts`, () => {
      const { getByTestId } = render(<ShapeBase {...props} />);
      const shapeElement = getByTestId(shapeKey);
      expect(shapeElement).toBeDefined();
      expect(shapeElement.classList).toContain(shapeKey);
      expect(shapeElement.querySelector(`#cs_${shapeKey}_noise`)).toBeTruthy();
      // element path mask is correct
      expect(
        shapeElement.querySelector(
          `mask#cs_${shapeKey}_mask path[d="${shapeData.shape}"]`
        )
      ).toBeTruthy();
      // element has blur
      if (shapeData.blur) {
        const blurFilter = shapeElement.querySelector(
          `filter#cs_${shapeKey}_blur feGaussianBlur[stdDeviation="${shapeData.blur}"]`
        );
        expect(blurFilter).toBeTruthy();
      }
      // element accepting shape fill color
      const fillElement = shapeElement.querySelector(
        `path[fill="${shapeData.shapeFill}"]`
      );
      if (props.shapeFill) {
        expect(fillElement).toBeTruthy();
        // element accepting shape opacity
        if (props.opacity) {
          expect(fillElement!.getAttribute("fill-opacity")).toBe(
            String(shapeData.opacity)
          );
        }
      }
      // element is rendering gradients correctly
      shapeData.gradient.map((gradient, _i) => {
        const gradientElement = shapeElement.querySelector(
          `#cs_${shapeKey}_gradient_${gradient.id || _i}`
        );
        expect(gradientElement).toBeTruthy();
        gradient.stops?.map((stop) => {
          const stopElement = gradientElement!.querySelector(
            `stop[stop-color="${stop.color}"][opacity="${stop.opacity || 1}"]`
          );
          expect(stopElement).toBeTruthy();
        });
      });
    });
  });
});

//
// describe("using random shape function", () => {
//   // it("it should return a random shape component", () => {
//   //   const randomShape = getRandomShape() as ForwardRefExoticComponent<any>;
//   //   expect(randomShape.displayName).toBeTruthy();
//   //   expect(
//   //     Object.keys(shapes).some((element) =>
//   //       randomShape.displayName?.toLowerCase().startsWith(element)
//   //     )
//   //   ).toBeTruthy();
//   // });
//   const randomShape = getRandomShape({ onlyId: true });
//   it("Should return a random valid shape identifier", () => {
//     const randomShape = getRandomShape({ onlyId: true });
//     expect(data[randomShape.shapeId]).toBeDefined();
//   });
//   it("Should return a random shape of same type", () => {
//     const randomShape = getRandomShape({ type: "ellipse" });
//     expect(randomShape.shape == "ellipse").toBeTruthy();
//     // expect(randomShape.displayName?.toLowerCase()).toMatch("ellipse");
//   });
// });
//
// describe("using specific shape type components", () => {
//   const props = {
//     className: "customName",
//     size: 20,
//     noise: true,
//   };
//   it("it should render a valid random component with given props from that shape category", () => {
//     const testID = "shape-component";
//     const { getByTestId } = render(<Star data-testid={testID} {...props} />);
//     const ShapeComponent = getByTestId(testID);
//     expect(ShapeComponent).toBeDefined();
//     expect(ShapeComponent.classList).toContain("coolshapes");
//     expect(ShapeComponent.getAttribute("width")).toBe(props.size.toString());
//   });
//   it("it should render a exact given component with index", () => {
//     const testID = "component-index";
//     const { getByTestId } = render(
//       <Star data-testid={testID} {...props} index={0} />
//     );
//     const ShapeComponent = getByTestId(testID);
//     expect(ShapeComponent).toBeDefined();
//     ShapeComponent.classList.forEach((classs) => {
//       console.log(classs);
//     });
//     console.log();
//     expect(ShapeComponent.classList).toContain("coolshapes");
//     expect(ShapeComponent.classList).toContain("star-1");
//   });
// });
//
// describe("Using coolshape component with noise prop", () => {
//   const { index, shapeType } = getRandomShape({ onlyId: true }) as componentId;
//   const props = {
//     className: "custom",
//     size: 20,
//     index,
//     type: shapeType,
//   };
//   const shouldAdd = shapeType === "number" ? 0 : 1;
//   const shapeId = `${shapeType}-${shouldAdd + index}`;
//
//   it("If noise is set to true, the noise should be visible ", () => {
//     const testID = "coolshape";
//     const { getByTestId } = render(
//       <Coolshape data-testid={testID} {...props} noise={true} />
//     );
//
//     const ShapeComponent = getByTestId(testID);
//     expect(ShapeComponent).toBeDefined();
//
//     expect(ShapeComponent.querySelector(`#cs_noise_1_${shapeId}`)).toBeTruthy();
//   });
//   it("If noise is set to false, the noise should not be visible ", () => {
//     const testID = "coolshape";
//     const { getByTestId } = render(
//       <Coolshape data-testid={testID} {...props} noise={false} />
//     );
//     const ShapeComponent = getByTestId(testID);
//     expect(ShapeComponent).toBeDefined();
//     expect(ShapeComponent.classList).toContain("coolshapes");
//     expect(ShapeComponent.querySelector(`#cs_noise_1_${shapeId}`)).toBeFalsy();
//   });
// });
