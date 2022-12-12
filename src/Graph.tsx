interface GraphProps {
  backgroundColor: string
  width: number
  height: number
}
function Graph({ backgroundColor, width, height }: GraphProps): JSX.Element {
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
          strokeWidth="30"
          d={`
            M ${textAreaWidth} 0
            l 0 ${graphY}
            l ${graphX} 0
          `}
          stroke="#000"
          fill={backgroundColor}
        />
      </svg>
    </div>
  )
}

export default Graph
