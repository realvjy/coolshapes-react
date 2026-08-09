export function angleToBoxCoords(degree: number) {
  const radians = degree * (Math.PI / 180);
  const oppositeRadians = (degree + 180) * (Math.PI / 180); // Opposite direction

  const centerX = 100;
  const centerY = 100;
  const radius = 100;

  const x1 = centerX + radius * Math.cos(radians);
  const y1 = centerY + radius * Math.sin(radians);

  const x2 = centerX + radius * Math.cos(oppositeRadians);
  const y2 = centerY + radius * Math.sin(oppositeRadians);

  return { x1, y1, x2, y2 };
}
