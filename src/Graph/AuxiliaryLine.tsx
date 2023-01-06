import { AdjustedGraphObj } from './types'

interface Props {
  adjustedGraphObj: AdjustedGraphObj
  graphY: number
  marginX: number
  marginY: number
}
export default function AuxiliaryLine({
  adjustedGraphObj,
  graphY,
  marginX,
  marginY
}: Props): JSX.Element {
  interface Result {
    x: JSX.Element[]
    y: JSX.Element[]
  }
  const result: Result = { x: [], y: [] }
  adjustedGraphObj.x.forEach((_, i) => {
    const y = -1 * adjustedGraphObj.y[i] + graphY - marginY / 2

    const x = adjustedGraphObj.x[i] + marginX / 2
    result.x.push(<line x1="0" y1={y} x2={x} y2={y} key={i} />)
    result.y.push(<line x1={x} y1={y} x2={x} y2={graphY} key={-i - 1} />)
  })
  return (
    <>
      <g stroke="red" className="x-auxiliary-lines">
        {result.x}
      </g>
      <g stroke="pink" className="y-auxiliary-lines">
        {result.y}
      </g>
    </>
  )
}
