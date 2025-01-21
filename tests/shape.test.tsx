/* eslint-disable  @typescript-eslint/no-explicit-any */
import "@testing-library/jest-dom/vitest";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import { ShapeBase } from "../src/lib";
import data from "../src/shapes/data";
import { defaultProps } from "../src/lib/shapeBase";
import { createShapeComponent } from "../src/lib/utils/shape";

import {
  Coolshape,
  Ellipse,
  Flower,
  Misc,
  Moon,
  NumberShape,
  Polygon,
  Rectangle,
  Star,
  Triangle,
  Wheel,
} from "../src";
import { shapeTypes } from "../src/lib/common";

const VIEWBOX_PATH = `M200 0H0v200h200V0z`;

const components = {
  star: Star,
  ellipse: Ellipse,
  flower: Flower,
  misc: Misc,
  moon: Moon,
  number: NumberShape,
  polygon: Polygon,
  rectangle: Rectangle,
  triangle: Triangle,
  wheel: Wheel,
};

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
    Object.entries(restDefaultProps).forEach(([attr, value]) => {
      expect(Component).toHaveAttribute(attr, value);
    });
    // default noise prop
    expect(componentHasNoise(Component, "test-1", defaultNoise)).toBeTruthy();
    expect(
      Component.querySelectorAll(
        `mask#cs_test-1_mask, g[mask="url(#cs_test-1_mask)"]`
      ).length
    ).toBe(2);
  });
  it("Component doesn't render the noise if prop set to false", () => {
    const { getByTestId } = render(<ShapeBase {...testProps} noise={false} />);
    const Component = getByTestId("base-component");
    expect(componentHasNoise(Component, "test-1", defaultNoise)).toBeFalsy();
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
    expect(maskElement).toBeDefined();
    expect(
      maskElement!.querySelector(`path[fill="white"][d="${VIEWBOX_PATH}"]`)
    ).toBeFalsy();
    expect(maskElement!.querySelector(`:nth-child(1)`)).toHaveAttribute(
      "fill-opacity",
      "0.3"
    );
  });
  // it("Component accepts different kind of gradient and gradientShapes, and renders with blur property", () => {
  //   const gradient: GradientProp[] = [
  //     {
  //       angle: 60,
  //       type: "linear",
  //       id: "1",
  //       stops: [
  //         {
  //           color: "red",
  //           offset: 0,
  //         },
  //         {
  //           color: "yellow",
  //           offset: "1",
  //         },
  //       ],
  //     },
  //     {
  //       type: "radial",
  //       id: "1",
  //       cx: 0,
  //       cy: 1,
  //       r: 1,
  //       stops: [
  //         {
  //           color: "blue",
  //           offset: 0,
  //         },
  //         {
  //           color: "blue",
  //           offset: 0.3,
  //         },
  //         {
  //           color: "orange",
  //           offset: "1",
  //         },
  //       ],
  //     },
  //   ];
  //
  //   const toCords = directionToBoxCoords(linearGradient.angle as number);
  //   const shape = <circle cx="50" cy="50" r="50" />;
  //   // linear
  //   const { getByTestId } = render(
  //     <ShapeBase
  //       {...testProps}
  //       gradient={[linearGradient]}
  //       gradientShapes={shape}
  //       blur={10}
  //     />
  //   );
  //   const Component = getByTestId("base-component");
  //   const linearElement = Component.querySelector(
  //     `linearGradient#cs_test-1_gradient_1[x1="${toCords.x1}"][x2="${toCords.x2}"][y1="${toCords.y1}"][y2="${toCords.y2}"]`
  //   );
  //   expect(linearElement).toBeDefined();
  //   linearGradient.stops.forEach((stop) => {
  //     expect(
  //       linearElement!.querySelector(
  //         `stop[stop-color="${stop.color}"][offset="${stop.offset}"]`
  //       )
  //     ).toBeTruthy();
  //   });
  //   expect(
  //     Component.querySelector(
  //       `path[fill="url(#cs_test-1_gradient_1)"][d="${VIEWBOX_PATH}"]`
  //     )
  //   ).toBeTruthy();
  //   expect(
  //     Component.querySelector(
  //       `filter#cs_test-1_blur feGaussianBlur[stdDeviation="${10}"]`
  //     )
  //   ).toBeTruthy();
  //   expect(
  //     Component.querySelector(`g[filter="url(#cs_test-1_blur)"]`)
  //   ).toBeTruthy();
  // });
  // it("Component accepts outline props and renders it", () => {
  //   const { getByTestId } = render(
  //     <ShapeBase
  //       {...testProps}
  //       outline={"black"}
  //       outlineWidth={"2px"}
  //       outlineLineJoin={"bevel"}
  //       opacity={0.5}
  //     />
  //   );
  //   const Component = getByTestId("base-component");
  //   expect(
  //     Component.querySelector(
  //       `path[stroke="black"][stroke-width="2px"][stroke-linejoin="bevel"][fill-opacity="0.5"]`
  //     )
  //   ).toBeTruthy();
  // });
});

describe.skip("Using every shape data from the defined shape data list", () => {
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
      if (shapeData.shapeFill) {
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

//
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

  it.skip("It renders random shape when random prop is true or only given shape type", () => {
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
    expect(shapeTypes).toContain(shapeType);
    expect(data[`${shapeType}-${shapeIndex}`]).toBeDefined();
  });
});

describe.skip("Using Category components", () => {
  it.each(Object.entries(components))(
    "it renders shape category",
    (type, Component) => {
      const props = {
        "data-testid": type,
      };
      const { getByTestId } = render(<Component {...props} index={1} />);
      const ShapeComponent = getByTestId(type);
      expect(ShapeComponent).toBeDefined();
      expect(
        ShapeComponent.querySelector(
          `mask#cs_${type}-1 path[d="${data[`${type}-${1}`]}"]`
        )
      ).toBeDefined();
    }
  );
});
