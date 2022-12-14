import Graph from './Graph/Graph'

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>neoclamp()</h1>
      <Graph
        width={400}
        height={300}
        data={{ x: [100, 200, 300], y: [400, 500, 300] }}
      />
    </div>
  )
}

export default App
