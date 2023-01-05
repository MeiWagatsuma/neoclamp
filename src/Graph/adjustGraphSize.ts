import { GraphValueList } from '../types'

export function adjustGraphSize(
  arr: number[],
  graphSize: number
): GraphValueList {
  // get Maxmimum value
  const maxGraphValue = arr.reduce((a, b) => (a > b ? a : b))
  // get minimam value
  const minGraphValue = arr.reduce((a, b) => (a < b ? a : b))
  const graphPerValue: number = graphSize / (maxGraphValue - minGraphValue)
  const zeroBaseGraphValue = arr.map((graphValue) => graphValue - minGraphValue)
  return zeroBaseGraphValue.map((graphValue) => graphValue * graphPerValue)
}
