import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import shapes, { shapeTypes } from "../shapes";

// TODO: add more tests later
describe("using every icons from the defined list", async () => {
  const shapeTypes = Object.keys(shapes) as Array<shapeTypes>;
  shapeTypes.forEach((type) => {
    shapes[type].forEach((Shape, i) => {
      const testId = "coolshape";
      const customClassName = "shape";
      const iconId = type + "-" + ++i;
      const size = 20;

      it(`${iconId} icon component renders`, () => {
        const { getByTestId } = render(
          <Shape data-testid={testId} size={size} className={customClassName} />
        );
        expect(getByTestId(testId)).toBeDefined();
      });
    });
  });
});
