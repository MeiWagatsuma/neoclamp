export function neoclamp(
  startPoint: number,
  startPixel: number,
  endPoint: number,
  endPixel: number
): string {
  const slope = (endPixel - startPixel) / (endPoint - startPoint)
  if (isNaN(slope)) {
    console.warn(
      `Invalid formula: (${endPixel} - ${startPixel}) / (${endPoint} - ${startPoint})`
    )
  }
  const interpolation = startPixel - slope * startPoint
  return `clamp(${Math.min(startPixel, endPixel)}px, ${
    slope * 100
  }vw + ${interpolation}px, ${Math.max(startPixel, endPixel)}px)`
}
