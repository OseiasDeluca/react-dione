import React from "react"
import ReactDOM from "react-dom"
import Buttom from './Button'
import ComponentA from "./ComponentA"
import ComponentB from "./ComponentB"
import "./index.css"

function soma(a, b) {
    alert(a + b)
}

const App = () => {

    return (
        <div className="App">
            Hello World
            <Buttom onClick={() => soma(10, 20)} name="Oséias Deluca" />
            <ComponentA>
                <ComponentB>
                    <Buttom onClick={() => soma(15, 25)} name="Keila Deluca" />
                </ComponentB>
            </ComponentA>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
