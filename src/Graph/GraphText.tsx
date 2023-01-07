import { AdjustedGraphObj, GraphValueObj } from './types'

interface Props {
  graphObj: GraphValueObj
  adjustedGraphObj: AdjustedGraphObj
  textAreaWidth: number
  fontSize: number
  graphY: number
  marginX: number
  marginY: number
}
export default function GraphText({
  graphObj,
  adjustedGraphObj,
  textAreaWidth,
  fontSize,
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
    const x = adjustedGraphObj.x[i] + textAreaWidth + marginX / 2
    const y = graphY - (adjustedGraphObj.y[i] + marginY / 2 - fontSize * 0.3)

    result.x.push(
      <text
        key={i}
        x={textAreaWidth - fontSize * 0.5}
        y={y}
        textAnchor="end"
        fontSize={fontSize}
      >
        {graphObj.y[i]}
      </text>
    )
    result.y.push(
      <text
        key={i}
        x={x}
        y={graphY + fontSize * 1.5}
        textAnchor="middle"
        fontSize={fontSize}
      >
        {graphObj.x[i]}
      </text>
    )
  })
  return (
    <>
      <g className="x-text">{result.x}</g>
      <g className="y-text">{result.y}</g>
    </>
  )
}
