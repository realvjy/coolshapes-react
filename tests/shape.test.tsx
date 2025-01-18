/* eslint-disable  @typescript-eslint/no-explicit-any */
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import { ShapeBase } from "../src/lib";
import data from "../src/shapes/data";
import { Coolshape, Star } from "../src";
import { shapesType } from "../src/lib/common";

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
      // component is accepting custom size and in valid ratio
      const componentHeight = shapeElement.getAttribute("height");
      expect(componentHeight).toBe(String(props.size));
      expect(componentHeight).toBe(shapeElement.getAttribute("width"));
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

describe("Using Coolshape component with custom props", () => {
  const props = {
    className: "custom",
    size: 20,
    "data-testid": "coolshape",
  };
  it("It renders component with given shape type and shape index", () => {
    const { getByTestId } = render(
      <Coolshape {...props} type={"star"} index={"1"} />
    );
    const ShapeComponent = getByTestId("coolshape");
    expect(ShapeComponent).toBeDefined();
    expect(ShapeComponent.classList[1]).toBe("star-1");
  });

  it("It renders random shape when random prop is true or only given shape type", () => {
    const { getByTestId } = render(
      <>
        <Coolshape {...props} random={true} />
        <Coolshape
          {...props}
          type={"triangle"}
          random={true}
          {...{ "data-testid": "shape-type" }}
        />
      </>
    );
    const ShapeComponent = getByTestId("coolshape");
    const ShapeTypeComponent = getByTestId("shape-type");

    expect(ShapeComponent).toBeDefined();
    expect(ShapeTypeComponent).toBeDefined();
    expect(data[ShapeComponent.classList[1]]).toBeDefined();
    const [shapeType, shapeIndex] = ShapeTypeComponent.classList[1].split("-");
    expect(shapesType).toContain(shapeType);
    expect(data[`${shapeType}-${shapeIndex}`]).toBeDefined();
  });
});

describe("Using Category component", () => {
  const props = {
    className: "custom",
    size: 20,
    "data-testid": "coolshape",
  };
  it("It renders component with given shape type and shape index", () => {
    const { getByTestId } = render(<Star {...props} index={"1"} />);
    const ShapeComponent = getByTestId("coolshape");
    expect(ShapeComponent).toBeDefined();
    expect(ShapeComponent.classList[1]).toBe("star-1");
  });
});
