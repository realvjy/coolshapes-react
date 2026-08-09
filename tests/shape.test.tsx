/* eslint-disable  @typescript-eslint/no-explicit-any */
import "@testing-library/jest-dom/vitest";

import * as React from "react";

import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { defaultProps } from "../src/components/ShapeBase";
import shapeData from "../scripts/shapeData";
import { createShapeComponent } from "../src/lib/shape";
import { OutlineCap, OutlineJoin } from "coolshapes-react";


describe("Using create component function", () => {
  const shapeProps = {
    shape: shapeData["flower-4"].shape,
    shapeId: "shape",
  };
  const Component = createShapeComponent(shapeProps.shapeId, { shape: shapeProps.shape });

  it("The component renders with default attributes ", () => {
    const { getByTestId } = render(<Component data-testid={"shape"} />);
    const element = getByTestId("shape");
    expect(element).toBeVisible();
    expect(element).toHaveClass("coolshapes");
    expect(element).toHaveAttribute("xmlns", defaultProps.xmlns);
    expect(element).toHaveAttribute("viewBox", defaultProps.viewBox);
    expect(element).toHaveAttribute("width", defaultProps.width);
    expect(element).toHaveAttribute("height", defaultProps.height);
  });

  it("The component has the default noise element", () => {
    const { getByTestId } = render(<Component data-testid={"shape"} />);
    const element = getByTestId("shape");
    const noiseMaskElement = element.querySelector(`#cs_${shapeProps.shapeId}_noise`);
    expect(noiseMaskElement).toBeTruthy();

    const noiseElement = element.querySelector(`[filter="url(#cs_${shapeProps.shapeId}_noise)"]`)
    expect(noiseElement).toBeTruthy();
  });

  // TODO: write tests for when given shape prop is a element and not a path string.
  it("The component renders the outline when given", () => {
    const outlineProps = {
      outline: 2,
      outlineColor: "red",
      outlineCap: "butt" as OutlineCap,
      outlineJoin: "mitter" as OutlineJoin,
      outlineOpacity: 10,
    };
    const query = `[fill="none"][stroke="red"][stroke-width="4"][stroke-linecap="butt"][stroke-opacity="10"][stroke-linejoin="mitter"]`;
    const { getByTestId } = render(<Component data-testid={"shape"} {...outlineProps} />);
    const element = getByTestId("shape");
    // The shape component overflow sets to visible that make sure the outline doesn't clip
    expect(element.style.overflow).toBe("visible");
    const outlineElement = element.querySelector(query);
    expect(outlineElement).toBeTruthy();
  });

  it ("The component has the shape mask element and it renders", ()=>{
    const { getByTestId } = render(<Component data-testid={"shape"} />);
    const element = getByTestId("shape");
    const shapeMask = element.querySelector(`#cs_${shapeProps.shapeId}_mask`);
    expect(shapeMask).toBeTruthy();
    expect(element.querySelector(`g[mask="url(#cs_${shapeProps.shapeId}_mask)"]`)).toBeDefined();
  });

  it ("The component has default white background when no color given", ()=> {
    const { getByTestId } = render(<Component data-testid={"shape"}/>);
    const element = getByTestId("shape");
    const backgroundLayer = element.querySelector('path[fill="white"][d="M200 0H0v200h200V0z"]')
    expect(backgroundLayer).toBeTruthy();
  });


  // TODO: more tests for logic dependent nodes
  // it ("The component accepts fill and fillOpacity");
  // it("The component renders gradient blur");
});


