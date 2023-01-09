import neoclamp from './neoclamp'

export function multipleClamp(
  startPoint: number,
  startPixel: number,
  endPoint: number,
  endPixel: number,
  ...argArray: number[]
): string {
  const arr = [startPoint, startPixel, endPoint, endPixel, ...argArray]

  const clampList: string[] = []
  for (let i = 3; i <= arr.length; i += 2) {
    const diff = i === 3 ? 0 : arr[i - 2]
    const clamp = neoclamp(
      arr[i - 3],
      arr[i - 2] - diff,
      arr[i - 1],
      arr[i] - diff
    )
    clampList.push(clamp)
  }
  return `calc(${clampList.join(' + ')})`
}
