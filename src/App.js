import logo from "./logo.svg"
import "./App.css"
import { FirebaseAuth } from "react-firebaseui"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        SalsaColombia official page
      </header>
    </div>
  )
}

export default App
