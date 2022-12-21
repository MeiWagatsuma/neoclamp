import { GraphValues } from '@/types'
import { ComputeLinePath } from './ComputeLinePath'

interface GraphProps {
  width: number
  height: number
  data: GraphValues
}

function Graph({ width, height, data }: GraphProps): JSX.Element {
  const TEXT_WIDTH = 20
  const TEXT_HEIGHT = 20
  const textAreaWidth = TEXT_WIDTH * 4
  const textAreaHeigh = TEXT_HEIGHT * 2
  const graphX = width - textAreaWidth
  const graphY = height - textAreaHeigh

  const absolutePosition = `M ${textAreaWidth} 0 `

  function adjustGraphSize(arr: number[], graphSize: number): number[] {
    // get Maxmimum value
    const maxGraphValue = arr.reduce((a, b) => (a > b ? a : b))
    // get minimam value
    const minGraphValue = arr.reduce((a, b) => (a < b ? a : b))
    const graphPerValue: number = graphSize / (maxGraphValue - minGraphValue)
    return arr.map((graphValue) => graphValue * graphPerValue)
  }

  const adjustedData = {
    x: adjustGraphSize(data.x, graphXValueArea),
    y: adjustGraphSize(data.y, graphYValueArea)
  }
  const minGraphValue = adjustedData.y.reduce((a, b) => (a < b ? a : b))
  const yAxiosAdjuster = minGraphValue - adjustedData.y[0]
  return (
    <div>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <path
          className="axis-line"
          strokeWidth="3"
          d={`
              ${absolutePosition}
              l 0 ${graphY}
              l ${graphX} 0
            `}
          stroke="#000"
          fill="none"
        />
        <path
          strokeWidth="3"
          stroke="blue"
          d={`
              ${absolutePosition}
              M ${textAreaWidth} ${graphY + yAxiosAdjuster - marginY / 2}
              l ${marginX/2} 0
              ${ComputeLinePath(adjustedData)}
              l ${marginX/2} 0
            `}
          fill="none"
        ></path>
      </svg>
    </div>
  )
}

export default Graph
