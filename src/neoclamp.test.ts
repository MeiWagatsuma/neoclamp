import { describe, test, expect } from '@jest/globals'
import { computeSlope } from './neoclamp'

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
