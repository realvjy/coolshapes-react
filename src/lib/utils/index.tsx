export function directionToBoxCoords(degree: number) {
  // Convert degree to radians
  const radians = degree * (Math.PI / 180);
  const oppositeRadians = (degree + 180) * (Math.PI / 180); // Opposite direction

  // Circle parameters
  const centerX = 100; // Center of the circle (x)
  const centerY = 100; // Center of the circle (y)
  const radius = 100; // Radius of the circle

  // Calculate x1 and y1 coordinates (first point)
  const x1 = centerX + radius * Math.cos(radians);
  const y1 = centerY + radius * Math.sin(radians);

  // Calculate x2 and y2 coordinates (opposite point)
  const x2 = centerX + radius * Math.cos(oppositeRadians);
  const y2 = centerY + radius * Math.sin(oppositeRadians);

  return { x1, y1, x2, y2 };
}
