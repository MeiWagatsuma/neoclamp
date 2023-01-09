import neoclamp from './neoclamp'

export default function extendNeoclamp(
  startPoint: number,
  startPixel: number,
  endPoint: number,
  endPixel: number,
  ...argArray: number[]
): string {
  const arr = [startPoint, startPixel, endPoint, endPixel, ...argArray]
  if (arr.length % 2 === 1) {
    console.warn('Arguments must be even numbers')
    return ''
  }

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
