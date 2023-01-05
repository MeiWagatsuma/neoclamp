import Graph from './Graph/Graph'
import { useState } from 'react'
import { styled } from '@stitches/react'

function App(): JSX.Element {
  const [data, setData] = useState({
    x: [100, 200, 300],
    y: [400, 500, 300]
  })

  const [input, setInput] = useState(JSON.stringify(data))
  const onChangeHandler = (e: any): void => {
    setInput(e.target.value)
  }
  const onClickHandler = (): void => {
    setData(JSON.parse(input))
  }

  return (
    <div className="App">
      <h1>neoclamp()</h1>
      <Graph width={600} height={300} data={data} marginX={100} marginY={40} />
      <Input onChange={onChangeHandler} value={input} />
      <button onClick={onClickHandler}>update data</button>
    </div>
  )
}
const Input = styled('input', {
  width: '500px'
})

export default App
