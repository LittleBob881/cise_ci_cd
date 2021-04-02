/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React, { Component } from "react"

class App extends Component {
  increment = this.makeIncrementer(1)

  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  makeIncrementer = (amount) => () =>
    this.setState((prevState) => ({
      count: prevState.count + amount,
    }))

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button className="increment" onClick={this.increment}>
          Increment count
        </button>
      </div>
    )
  }
}
export default App
