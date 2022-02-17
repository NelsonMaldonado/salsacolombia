import logo from "./logo.svg"
import "./App.css"

import { Component } from "react"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>SalsaColombia official page</h1>
          {this.state.isSignedIn ? (
            <div>Signed In!</div>
          ) : (
            <div>Not Signed In!</div>
          )}
        </header>
      </div>
    )
  }
}

export default App
