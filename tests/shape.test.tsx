/* eslint-disable  @typescript-eslint/no-explicit-any */
import "@testing-library/jest-dom/vitest";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { ShapeBase } from "../src/lib";
import data from "../src/shapes/data";
import { defaultProps } from "../src/lib/shapeBase";
import { createShapeComponent, getRandomShape } from "../src/lib/utils/shape";

import { GradientProp, MaskShape } from "../src/lib/types";
import { directionToBoxCoords } from "../src/lib/utils";
import { renderToStaticMarkup } from "react-dom/server";
import { Coolshape, shapesData } from "../src";
import { shapeTypes } from "../src/lib/common";

const VIEWBOX_PATH = `M200 0H0v200h200V0z`;

const componentHasNoise = (Element: HTMLElement, id: string, noise: number) => {
  return (
    Element.querySelector(
      `filter#cs_${id}_noise feTurbulence[baseFrequency="${noise}"`
    ) &&
    Element.querySelector(
      `path[d="${VIEWBOX_PATH}"][filter="url(#cs_${id}_noise)"]`
    )
  );
};

const componentHasValidShapeMask = (
  Element: HTMLElement,
  id: string,
  MaskData: MaskShape
) => {
  if (typeof MaskData == "string") {
    expect(Element!.querySelector(`path[d="${MaskData}`)).toBeTruthy();
  } else {
    const htmlString = renderToStaticMarkup(MaskData);
    expect(Element).toContainHTML(htmlString);
  }
};

describe("Using base component", () => {
  const testProps = {
    "data-testid": "base-component",
    shapeId: "test-1",
    shape: data["star-1"].shape,
  };

  const {
    className: defaultClassname,
    noise: defaultNoise,
    ...restDefaultProps
  } = defaultProps;

  it("Component renders with default props", () => {
    const { getByTestId } = render(<ShapeBase {...testProps} />);
    const Component = getByTestId("base-component");
    expect(Component).toBeVisible();
    expect(Component).toHaveClass(defaultClassname, "test-1");
    // check if svg element has all the default props
    Object.entries(restDefaultProps).forEach(([attr, value]) => {
      expect(Component).toHaveAttribute(attr, value);
    });

    // check if component has default noise
    expect(componentHasNoise(Component, "test-1", defaultNoise)).toBeTruthy();
    // check if component has default shape mask and it renders
    expect(
      Component.querySelectorAll(
        `mask#cs_test-1_mask, g[mask="url(#cs_test-1_mask)"]`
      ).length
    ).toBe(2);
  });
  it("Component accepts and render shape color", () => {
    const { getByTestId } = render(<ShapeBase {...testProps} fill={"red"} />);
    const Component = getByTestId("base-component");
    expect(
      Component.querySelector(
        `path[fill="red"][d="${VIEWBOX_PATH}"][fill-opacity="1"]`
      )
    ).toBeTruthy();
  });

  it("Component accepts transparent prop and opacity", () => {
    const { getByTestId } = render(
      <ShapeBase {...testProps} fill={"red"} transparent={true} opacity={0.3} />
    );
    const Component = getByTestId("base-component");
    const maskElement = Component.querySelector(
      `g[mask="url(#cs_test-1_mask)"]`
    );
    expect(maskElement).toBeTruthy();
    expect(
      maskElement!.querySelector(`path[fill="white"][d="${VIEWBOX_PATH}"]`)
    ).toBeFalsy();
    expect(maskElement!.querySelector(`:nth-child(1)`)).toHaveAttribute(
      "fill-opacity",
      "0.3"
    );
  });

  it("Component accepts gradient props, and it renders with blur property", () => {
    // TODO: test for all different way gradients can be passed
    const gradient: GradientProp[] = [
      {
        angle: 60,
        type: "linear",
        id: "1",
        stops: [
          {
            color: "red",
            offset: 0,
          },
          {
            color: "yellow",
            offset: "1",
          },
        ],
      },
      {
        type: "radial",
        id: "2",
        cx: 0,
        cy: 1,
        r: 1,
        stops: [
          {
            color: "blue",
            offset: 0,
          },
          {
            color: "blue",
            offset: 0.3,
          },
          {
            color: "orange",
            offset: "1",
            opacity: 0,
          },
        ],
      },
    ];
    const gradientShapes = (
      <>
        <path fill="red" d="M212.25-15H100v139.75h112.25V-15z"></path>
        <path fill="red" d="M133.875-7H15v128.25h118.875V-7z"></path>
        <path fill="red" d="M223 68H81v146h142V68z"></path>
      </>
    );
    // gradient.map((gradient, _i)=> {
    const { getByTestId } = render(
      <ShapeBase
        {...testProps}
        fill={"red"}
        blur={40}
        transparent={true}
        opacity={0.3}
        gradient={{ gradient, shapes: gradientShapes }}
      />
    );
    const Component = getByTestId("base-component");
    gradient.map(({ stops, opacity, id, ...gradient }, _i) => {
      const GradientElement = Component.querySelector(
        `#cs_test-1_gradient_${id}`
      );
      expect(GradientElement).toBeTruthy();
      stops?.map((stopData) => {
        const stopElement = GradientElement?.querySelector(
          `stop[offset="${stopData.offset}"][stop-color="${stopData.color}"]`
        );
        expect(stopElement).toBeTruthy();
        if (stopData.opacity) {
          expect(stopElement).toHaveAttribute("stop-opacity", String(opacity));
        }
        const GradientUseElement = Component.querySelector(
          `path[fill="url(#cs_test-1_gradient_${id || _i})"][d="${VIEWBOX_PATH}"]`
        );
        expect(GradientUseElement).toBeTruthy();
        if (gradient.type == "linear") {
          const dirCoords = directionToBoxCoords(Number(gradient.angle!));
          Object.entries(dirCoords).map(([key, value]) => {
            expect(GradientElement).toHaveAttribute(key, String(value));
          });
        }
      });
    });
    const BlurElement = Component.querySelector(
      `filter#cs_test-1_blur feGaussianBlur[stdDeviation="${40}"]`
    );
    expect(BlurElement).toBeTruthy();
    const BlurUseElement = Component.querySelector(
      `g[filter="url(#cs_test-1_blur)"]`
    );
    expect(BlurUseElement).toBeTruthy();
    expect(BlurUseElement?.querySelector('path[fill="red"]')).toBeTruthy();
  });
  it("Component doesn't render the noise if prop set to false", () => {
    const { getByTestId } = render(<ShapeBase {...testProps} noise={false} />);
    const Component = getByTestId("base-component");
    expect(componentHasNoise(Component, "test-1", defaultNoise)).toBeFalsy();
  });
});

describe("Using Coolshape component with custom props", () => {
  const props = {
    className: "custom",
    size: 20,
    "data-testid": "coolshape",
  };
  it("It renders component with given shape type and shape index", () => {
    const randomShape = getRandomShape();
    const { getByTestId } = render(
      <Coolshape {...props} name={randomShape.shapeId} />
    );
    const ShapeComponent = getByTestId("coolshape");
    expect(ShapeComponent).toBeVisible();
    componentHasValidShapeMask(
      ShapeComponent,
      randomShape.shapeId,
      shapesData[randomShape.shapeId].shape
    );
  });

  it("It renders random valid shape when random prop is true or only given shape type", () => {
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

    expect(ShapeComponent).toBeVisible();
    expect(ShapeTypeComponent).toBeVisible();
    const RandomShapeId = ShapeComponent.classList[1];
    componentHasValidShapeMask(
      ShapeComponent,
      RandomShapeId,
      shapesData[RandomShapeId].shape
    );
    const [shapeType, shapeIndex] = ShapeTypeComponent.classList[1].split("-");
    expect(shapeTypes).toContain(shapeType);
    expect(data[`${shapeType}-${shapeIndex}`]).toBeDefined();
  });
});

describe("Using every shape data from the defined shape data list", () => {
  Object.entries(data).forEach(([shapeKey, shapeData]) => {
    const props = {
      className: "shape",
      "data-testid": shapeKey,
      size: 20,
    };

    it(`${shapeKey} icon component renders and has all parts`, () => {
      const ShapeComponent = createShapeComponent(shapeKey, shapeData);
      const { getByTestId } = render(<ShapeComponent {...props} />);

      const shapeElement = getByTestId(shapeKey);
      // component is accepting custom size and in valid ratio
      expect(shapeElement).toBeVisible();
      expect(shapeElement.classList).toContain(shapeKey);
      // element path mask is correct
      const MaskElement = shapeElement.querySelector(
        `mask#cs_${shapeKey}_mask`
      );
      expect(MaskElement).toBeTruthy();
      if (typeof shapeData.shape == "string") {
        expect(
          MaskElement!.querySelector(`path[d="${shapeData.shape}`)
        ).toBeTruthy();
      } else {
        const htmlString = renderToStaticMarkup(shapeData.shape);
        expect(MaskElement).toContainHTML(htmlString);
      }

      // element has blur
      if (shapeData.blur) {
        const blurFilter = shapeElement.querySelector(
          `filter#cs_${shapeKey}_blur feGaussianBlur[stdDeviation="${shapeData.blur}"]`
        );
        expect(blurFilter).toBeTruthy();
      }
      // element accepting shape fill color
      const fillElement = shapeElement.querySelector(
        `path[fill="${shapeData.fill}"]`
      );
      if (shapeData.fill) {
        expect(fillElement).toBeTruthy();
        // element accepting shape opacity
        if (shapeData.opacity) {
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
            `stop[stop-color="${stop.color}"][stop-opacity="${stop.opacity || 1}"]`
          );
          expect(stopElement).toBeTruthy();
        });
      });
    });
  });
});

describe("Using Component returned by `createShapeComponent` function", () => {
  const props = {
    className: "shape",
    "data-testid": "coolshape",
  };
  const { shapeId } = getRandomShape({ type: "star" });
  const randomShapeData = shapesData[shapeId];
  const ShapeComponent = createShapeComponent(shapeId, randomShapeData);

  it("It renders a valid shape Component", () => {
    const { getByTestId } = render(<ShapeComponent {...props} />);
    const Component = getByTestId("coolshape");
    expect(Component).toBeVisible();
    componentHasValidShapeMask(Component, shapeId, randomShapeData.shape);
  });

  it("It renders a blank component with only color when passed a fill prop", () => {
    const { getByTestId } = render(<ShapeComponent {...props} fill={"blue"} />);
    const Component = getByTestId("coolshape");
    expect(Component).toBeVisible();
    componentHasValidShapeMask(Component, shapeId, randomShapeData.shape);
    expect(
      Component.querySelectorAll(`linearGradient, radialGradient`).length
    ).toBeFalsy();
  });
});
