import { GraphValues, LinePath } from '@/types'
import { useEffect } from 'react'
import { ComputeLinePath } from './ComputeLinePath'
import { useAnimationPath } from './useAnimationPath'

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
  const INIT_PATH: LinePath = `l ${graphX} 0`

  const absolutePosition = `M ${textAreaWidth} 0 `
  const { computedPathObj, updateComputedPath } = useAnimationPath(INIT_PATH)

  useEffect(() => {
    updateComputedPath(ComputeLinePath(data))
    console.log('computedPath', ComputeLinePath(data))
  }, [data])

  return (
    <div>
      <p>{JSON.stringify(computedPathObj)}</p>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <rect width="400" height="300" fill="#b6c0e7" />
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
              M ${textAreaWidth} ${graphY}
            `}
          fill="none"
        >
          <animate
            strokeWidth="3"
            stroke="blue"
            attributeName="d"
            // from={`M 0 100 ${computedPathObj.from}`}
            // to={`M 0 200 ${computedPathObj.to}`}
            from={`M 0 100 ${computedPathObj.from}`}
            to={`M 0 200 ${computedPathObj.to}`}
            dur="1s"
            fill="freeze"
          />
        </path>
      </svg>
    </div>
  )
}

export default Graph
