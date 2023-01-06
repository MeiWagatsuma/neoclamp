import { AdjustedGraphObj } from './types'
import { ComputeLinePath } from './ComputeLinePath'

interface Props {
  adjustedGraphObj: AdjustedGraphObj
  marginX: number
  marginY: number
  graphY: number
}
export default function GraphLine({
  adjustedGraphObj,
  marginX,
  marginY,
  graphY
}: Props): JSX.Element {
  const minGraphValue = adjustedGraphObj.y.reduce((a, b) => (a < b ? a : b))
  const yAxiosAdjuster = minGraphValue - adjustedGraphObj.y[0]

  return (
    <path
      strokeWidth="3"
      stroke="blue"
      d={`
              M 0 ${graphY + yAxiosAdjuster - marginY / 2}
              l ${marginX / 2} 0
              ${ComputeLinePath(adjustedGraphObj)}
              l ${marginX / 2} 0
            `}
      fill="none"
    ></path>
  )
}
