import { GraphValueObj } from '@/types'
import { adjustGraphSize } from './adjustGraphSize'
import AuxiliaryLine from './AuxiliaryLine'
import AxisLine from './AxisLine'
import GraphLine from './GraphLine'

interface GraphProps {
  width: number
  height: number
  data: GraphValueObj
  marginX: number
  marginY: number
}

export default function Graph({
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

  const adjustedData: GraphValueObj = {
    x: adjustGraphSize(data.x, graphXValueArea),
    y: adjustGraphSize(data.y, graphYValueArea)
  }

  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <symbol id="graph-area">
          <AuxiliaryLine
            adjustedGraphObj={adjustedData}
            graphY={graphY}
            marginX={marginX}
            marginY={marginY}
          />
          <AxisLine graphX={graphX} graphY={graphY} />
          <GraphLine
            adjustedGraphObj={adjustedData}
            graphY={graphY}
            marginX={marginX}
            marginY={marginY}
          />
        </symbol>
        <use x={textAreaWidth} y="0" xlinkHref="#graph-area" />
      </svg>
    </div>
  )
}
