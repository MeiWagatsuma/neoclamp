import LinePath from './LinePath'

interface GraphProps {
  width: number
  height: number
}

function Graph({ width, height }: GraphProps): JSX.Element {
  const TEXT_WIDTH = 20
  const TEXT_HEIGHT = 20
  const textAreaWidth = TEXT_WIDTH * 4
  const textAreaHeigh = TEXT_HEIGHT * 2
  const graphX = width - textAreaWidth
  const graphY = height - textAreaHeigh

  return (
    <div>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <rect width="400" height="300" fill="#b6c0e7" />
        <path
          className="axis-line"
          strokeWidth="3"
          d={`
            M ${textAreaWidth} 0
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
            M ${textAreaWidth} ${graphY}
            ${LinePath({ x: [100, 200, 300], y: [400, 500, 300] })}
          `}
          fill="none"
        />
      </svg>
    </div>
  )
}

export default Graph
