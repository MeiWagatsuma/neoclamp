import { GraphValueObj } from '@/types'
import { adjustGraphSize } from './adjustGraphSize'
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

  const adjustedData: GraphValueObj = {
    x: adjustGraphSize(data.x, graphXValueArea),
    y: adjustGraphSize(data.y, graphYValueArea)
  }

  interface AuxiliaryLineProps {
    graphObj: GraphValueObj
  }
  function AuxiliaryLine({ graphObj }: AuxiliaryLineProps): JSX.Element {
    console.log(graphObj)
    interface Result {
      x: JSX.Element[]
      y: JSX.Element[]
    }
    const result: Result = { x: [], y: [] }
    graphObj.x.forEach((_, i) => {
      const y = -1 * graphObj.y[i] + graphYValueArea + marginY / 2

      const x = graphObj.x[i] + marginX / 2
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

  function AxiosLine(): JSX.Element {
    return (
      <path
        className="axis-line"
        strokeWidth="3"
        d={`
              M 0 0 
              l 0 ${graphY}
              l ${graphX} 0
            `}
        stroke="#000"
        fill="none"
      />
    )
  }

  function GraphLine(): JSX.Element {
    const minGraphValue = adjustedData.y.reduce((a, b) => (a < b ? a : b))
    const yAxiosAdjuster = minGraphValue - adjustedData.y[0]

    return (
      <path
        strokeWidth="3"
        stroke="blue"
        d={`
              M 0 ${graphY + yAxiosAdjuster - marginY / 2}
              l ${marginX / 2} 0
              ${ComputeLinePath(adjustedData)}
              l ${marginX / 2} 0
            `}
        fill="none"
      ></path>
    )
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
          <AuxiliaryLine graphObj={adjustedData} />
          <AxiosLine />
          <GraphLine />
        </symbol>
        <use x={textAreaWidth} y="0" xlinkHref="#graph-area" />
      </svg>
    </div>
  )
}

export default Graph
