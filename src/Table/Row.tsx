interface Props {
  rows: number[][]
  onChangeHandler: any
}
export default function Row({ rows, onChangeHandler }: Props): JSX.Element {
  return (
    <tbody>
      {rows.map(
        (row: number[], i): JSX.Element => (
          <tr key={i}>
            <td className="breakpoint">
              <input
                onChange={(e) => onChangeHandler(e, 'x', i)}
                type="number"
                value={row[0]}
              />
            </td>
            <td className="pixels">
              <input
                onChange={(e) => onChangeHandler(e, 'y', i)}
                type="number"
                value={row[1]}
              />
            </td>
          </tr>
        )
      )}
    </tbody>
  )
}
