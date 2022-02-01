import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

function sum(a, b) {
  return a + b // soma
}

function primeiroJSX() {
  return (
  <div className="teste">
    Oseias Deluca - Introdução ao ReactJs
    <h1>Soma: {sum(10, 20)}</h1>
  </div>
  )
}


const App = () => {

    return (
        <div className="App">
            {primeiroJSX()}
        </div>
    )
}

// SAP
const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
