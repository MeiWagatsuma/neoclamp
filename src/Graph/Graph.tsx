import { GraphValueObj, LinePath } from '@/types'
import { ComputeLinePath } from './ComputeLinePath'

interface GraphProps {
  width: number
  height: number
  data: GraphValueObj
  marginX: number
  marginY: number
}

function Graph({
  width,
  height,
  data,
  marginX = 0,
  marginY = 0
}: GraphProps): JSX.Element {
  const TEXT_WIDTH = 20
  const TEXT_HEIGHT = 20
  const textAreaWidth = TEXT_WIDTH * 4
  const textAreaHeigh = TEXT_HEIGHT * 2
  const graphX = width - textAreaWidth
  const graphY = height - textAreaHeigh
  const graphXValueArea = graphX - marginX
  const graphYValueArea = graphY - marginY

  const absolutePosition = `M ${textAreaWidth} 0 `

  function adjustGraphSize(arr: number[], graphSize: number): number[] {
    // get Maxmimum value
    const maxGraphValue = arr.reduce((a, b) => (a > b ? a : b))
    // get minimam value
    const minGraphValue = arr.reduce((a, b) => (a < b ? a : b))
    const graphPerValue: number = graphSize / (maxGraphValue - minGraphValue)
    const zeroBaseGraphValue = arr.map(
      (graphValue) => graphValue - minGraphValue
    )
    return zeroBaseGraphValue.map((graphValue) => graphValue * graphPerValue)
  }

  const adjustedData = {
    x: adjustGraphSize(data.x, graphXValueArea),
    y: adjustGraphSize(data.y, graphYValueArea)
  }
  const minGraphValue = adjustedData.y.reduce((a, b) => (a < b ? a : b))
  const yAxiosAdjuster = minGraphValue - adjustedData.y[0]

  function xAuxiliaryLine(graphObj: GraphValueObj): LinePath {
    console.log(graphObj)
    let result = ''
    graphObj.x.forEach((_, i) => {
      result += `M ${textAreaWidth} ${
        -1 * graphObj.y[i] + graphYValueArea + marginY / 2
      } l ${graphObj.x[i] + marginX / 2} 0 `
    })
    return result
  }
  return (
    <div>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <path
          className="auxiliary-lines"
          stroke="red"
          strokeWidth="3"
          d={`
            ${xAuxiliaryLine(adjustedData)}
          `}
        ></path>
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
              l ${marginX / 2} 0
              ${ComputeLinePath(adjustedData)}
              l ${marginX / 2} 0
            `}
          fill="none"
        ></path>
      </svg>
    </div>
  )
}

export default Graph
