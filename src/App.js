import logo from "./logo.svg"
import "./App.css"
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>SalsaColombia</title>
        <img src={logo} className="App-logo" alt="logo" />

        <h1>SalsaColombia official page</h1>
      </header>
      <Home />
    </div>
  )
}

export default App
