interface Props {
  rows: number[][]
}
export default function Row({ rows }: Props): JSX.Element {
  return (
    <tbody>
      {rows.map(
        (row: number[], i): JSX.Element => (
          <tr key={i}>
            <td className="breakpoint">
              <input type="number" value={row[0]} />
            </td>
            <td className="pixels">
              <input type="number" value={row[1]} />
            </td>
          </tr>
        )
      )}
    </tbody>
  )
}
