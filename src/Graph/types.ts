export type GraphValue = number

export type GraphValueList = GraphValue[]

export interface GraphValueObj {
  x: GraphValueList
  y: GraphValueList
}

export type AdjustedGraphList = number[]

export interface AdjustedGraphObj {
  x: AdjustedGraphList
  y: AdjustedGraphList
}

export type LinePath = string

export interface ComputedPathObj {
  from: LinePath
  to: LinePath
}
