export interface Data {
  x: number[]
  y: number[]
}

export type OnChangeHandler = (
  e: React.ChangeEvent<HTMLInputElement>,
  key: keyof Data,
  index: number
) => void
