import Row from './Row'

interface Props {
  data: {
    x: number[]
    y: number[]
  }
  onChangeHandler: any
}
export default function Table({ data, onChangeHandler }: Props): JSX.Element {
  const rows: number[][] = []
  data.x.forEach((_, i) => rows.push([data.x[i], data.y[i]]))
  return (
    <table>
      <thead>
        <tr>
          <th>BreakPoint</th>
          <th>Pixels</th>
        </tr>
      </thead>
      <Row rows={rows} onChangeHandler={onChangeHandler} />
    </table>
  )
}
