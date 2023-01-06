interface Props {
  graphX: number
  graphY: number
}
export default function AxisLine({ graphX, graphY }: Props): JSX.Element {
  return (
    <path
      className="axis-line"
      strokeWidth="3"
      d={`M 0 0 
        l 0 ${graphY}
        l ${graphX} 0`}
      stroke="#000"
      fill="none"
    />
  )
}
