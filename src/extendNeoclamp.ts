import neoclamp from './neoclamp'

export default function extendNeoclamp(...arr: number[]): string {
  if (arr.length % 2 === 1) {
    console.warn('Arguments must be even numbers')
    return ''
  }
  const clampList: string[] = []
  console.log('length: ', arr.length)
  for (let i = 3; i <= arr.length; i += 2) {
    console.log('i: ', i)

    const diff = i === 3 ? 0 : arr[i - 2]
    console.log('diff: ', diff)
    const clamp = neoclamp(
      arr[i - 3],
      arr[i - 2] - diff,
      arr[i - 1],
      arr[i] - diff
    )
    console.log(arr[i - 3], arr[i - 2], arr[i - 1], arr[i] - arr[i - 2])
    console.log(clamp)
    clampList.push(clamp)
  }
  return `calc(${clampList.join(' + ')})`
}
