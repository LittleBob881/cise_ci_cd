import React, { Component } from 'react';
class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }
  makeIncrementer = amount => () =>
    this.setState(prevState => ({
      count: prevState.count + amount,
    }));
  increment = this.makeIncrementer(1);
  render() {
    return (
      <div>ENSE701 Assessment 1A
      S1 2021 Pg 3 of 6 copyright Jim Buchan
        <p>Count: {this.state.count}</p>
        <button className="increment" onClick={this.increment}>Increment
count</button>
      </div>
    )
  }
}
export default App;
