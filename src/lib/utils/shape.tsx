import { GradientStop } from "../types";

export function resolveGradientStops(
  stops: GradientStop[] | string[]
): GradientStop[] {
  const stopLen = stops.length;
  const offsetPerStop = 1 / (stopLen - 1);
  return stops.map((stop, index) => {
    let offset = index * offsetPerStop;
    let opacity = 1;
    let color;
    if (typeof stop == "string") {
      color = stop;
    } else {
      color = stop.color;
      opacity = stop.opacity !== undefined ? stop.opacity : 1;
      offset = stop.offset ? stop.offset : offset;
    }
    return {
      offset,
      color,
      opacity,
    };
  });
}
