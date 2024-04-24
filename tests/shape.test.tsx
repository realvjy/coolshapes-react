/* eslint-disable  @typescript-eslint/no-explicit-any */
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React, { ForwardRefExoticComponent } from "react";
import shapes, { componentId, getRandomShape, shapeTypes } from "../src/shapes";
import { ShapeType } from "../src/lib";
import { Coolshape, Star } from "../src";

describe("using every icons from the defined component list", () => {
  const shapeTypes = Object.keys(shapes) as Array<shapeTypes>;
  shapeTypes.forEach((type) => {
    shapes[type].forEach((Shape, i) => {
      const iconId = `${type}-${type === "number" ? i : ++i}`;

      const props = {
        className: "shape",
        "data-testid": iconId,
        size: 20,
      };
      it(`${iconId} icon component renders and has default noise`, () => {
        const { getByTestId } = render(<Shape {...props} />);
        const shapeElement = getByTestId(iconId);
        expect(shapeElement).toBeDefined();
        expect(shapeElement.classList).toContain(iconId);
        expect(
          shapeElement.querySelector(`#cs_noise_1_${iconId}`)
        ).toBeTruthy();
      });
      it(`Component is accepting custom class name and sizes `, () => {
        const { getByTestId } = render(<Shape {...props} />);
        const shapeElement = getByTestId(iconId);

        expect(shapeElement.classList.contains(props.className)).toBeTruthy();
        expect(shapeElement.getAttribute("width")).toBe(props.size.toString());
        expect(shapeElement.getAttribute("height")).toBe(props.size.toString());
      });
    });
  });
});

describe("using random shape function", () => {
  it("it should return a random shape component", () => {
    const randomShape = getRandomShape() as ForwardRefExoticComponent<any>;
    expect(randomShape.displayName).toBeTruthy();
    expect(
      Object.keys(shapes).some((element) =>
        randomShape.displayName?.toLowerCase().startsWith(element)
      )
    ).toBeTruthy();
  });

  it("Should return a random shape identifier", () => {
    const randomShape = getRandomShape({ onlyId: true }) as componentId;
    expect(shapes[randomShape.shapeType][randomShape.index]).toBeDefined();
  });
  it("Should return a random shape of same type", () => {
    const randomShape = getRandomShape({ type: "ellipse" }) as ShapeType;
    expect(randomShape.displayName).toBeTruthy();
    expect(randomShape.displayName?.toLowerCase()).toMatch("ellipse");
  });
});

describe("using specific shape type components", () => {
  const props = {
    className: "customName",
    size: 20,
    noise: true,
  };
  it("it should render a valid random component with given props from that shape category", () => {
    const testID = "shape-component";
    const { getByTestId } = render(<Star data-testid={testID} {...props} />);
    const ShapeComponent = getByTestId(testID);
    expect(ShapeComponent).toBeDefined();
    expect(ShapeComponent.classList).toContain("coolshapes");
    expect(ShapeComponent.getAttribute("width")).toBe(props.size.toString());
  });
  it("it should render a exact given component with index", () => {
    const testID = "component-index";
    const { getByTestId } = render(
      <Star data-testid={testID} {...props} index={0} />
    );
    const ShapeComponent = getByTestId(testID);
    expect(ShapeComponent).toBeDefined();
    ShapeComponent.classList.forEach((classs) => {
      console.log(classs);
    });
    console.log();
    expect(ShapeComponent.classList).toContain("coolshapes");
    expect(ShapeComponent.classList).toContain("star-1");
  });
});

describe("Using coolshape component with noise prop", () => {
  const { index, shapeType } = getRandomShape({ onlyId: true }) as componentId;
  const props = {
    className: "custom",
    size: 20,
    index,
    type: shapeType,
  };
  const shouldAdd = shapeType === "number" ? 0 : 1;
  const shapeId = `${shapeType}-${shouldAdd + index}`;

  it("If noise is set to true, the noise should be visible ", () => {
    const testID = "coolshape";
    const { getByTestId } = render(
      <Coolshape data-testid={testID} {...props} noise={true} />
    );

    const ShapeComponent = getByTestId(testID);
    expect(ShapeComponent).toBeDefined();

    expect(ShapeComponent.querySelector(`#cs_noise_1_${shapeId}`)).toBeTruthy();
  });
  it("If noise is set to false, the noise should not be visible ", () => {
    const testID = "coolshape";
    const { getByTestId } = render(
      <Coolshape data-testid={testID} {...props} noise={false} />
    );
    const ShapeComponent = getByTestId(testID);
    expect(ShapeComponent).toBeDefined();
    expect(ShapeComponent.classList).toContain("coolshapes");
    expect(ShapeComponent.querySelector(`#cs_noise_1_${shapeId}`)).toBeFalsy();
  });
});
