import Graph from './Graph'
import { useState } from 'react'
import Table from './Table'
import CodeBlock from './CodeBlock'
import { OnChangeHandler, Data } from './type'
import { multipleNeoclamp } from './multipleNeoclamp'

function App(): JSX.Element {
  const [data, setData] = useState<Data>({
    x: [100, 200, 300],
    y: [400, 500, 300]
  })

  const onChangeHandler: OnChangeHandler = (e, key, index) => {
    const result: Data = { ...data }
    result[key][index] = Number(e.target.value)
    console.log(result)
    setData(result)
  }

  const multipleNeoclampArg: number[] = []
  data.x.forEach((_, i) => {
    multipleNeoclampArg.push(data.x[i])
    multipleNeoclampArg.push(data.y[i])
  })
  const code = multipleNeoclamp(...multipleNeoclampArg)

  return (
    <div className="App">
      <h1>neoclamp()</h1>
      <Graph width={600} height={300} data={data} marginX={100} marginY={40} />
      <Table data={data} onChangeHandler={onChangeHandler} />
      <CodeBlock code={code} />
    </div>
  )
}

export default App
