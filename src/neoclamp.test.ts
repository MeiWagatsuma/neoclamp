import { describe, test, expect } from '@jest/globals'
import { computeDiff, computeSlope } from './neoclamp'

describe('slope function', () => {
  test.each([
    [0, 1, 0, 1, 1],
    [0, 20, 0, 20, 1],
    [10, 30, 20, 40, 1],
    [0, 1, 1, -2, -3],
    [-200, 400, 300, 450, 0.25],
    [-500, -520, -300, -45, -12.75]
  ])('( %i - %i ) / ( %i - %i ) = %n', (x1, x2, y1, y2, expected) => {
    expect(computeSlope(x1, y1, x2, y2)).toBe(expected)
  })
})

describe('computeDiff function', () => {
  test.each`
    x       | y      | slope
    ${350}  | ${80}  | ${2}
    ${350}  | ${-80} | ${-2}
    ${850}  | ${170} | ${20}
    ${-850} | ${170} | ${20}
  `('diff + startPoint = startPixel', ({ x, y, slope }) => {
    expect(computeDiff(x, y, slope) + slope * x).toBe(y)
  })
})
