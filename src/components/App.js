import React, {Component} from 'react';

const App = () => {
  return (
    <Counter></Counter>
  )
}

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  handlePlusButton = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  handleMinusButton = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          count: {this.state.count}
        </div>
        <button className="" onClick={this.handlePlusButton}>
          +1
        </button>
        <button className="" onClick={this.handleMinusButton}>
          -1
        </button>
      </React.Fragment>
    );
  }
}

export default App;
