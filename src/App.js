import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Instructions } from './components'
import './styles/app.css'

class Counter extends Component {
  static propTypes = {
    initialCount: PropTypes.number.isRequired
  }
  constructor(props) {
    super(props)
    this.state = { count: this.props.initialCount }
  }
  incClick = () => {
    this.setState(state => ({
      count: state.count + 1
    }))
  }
  decClick = () => {
    this.setState(state => ({
      count: state.count - 1
    }))
  }
  render() {
    return (
      <div>
        <button onClick={this.decClick}>Decrease</button>
        Count state: {this.state.count}
        <button onClick={this.incClick}>Increase</button>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Counter initialCount={0} />
        <Instructions
          shouldDisplayImage={true}
          items={['first', 'second', 'third', 'fourth', 'gg', 'asdf', '12']}
        />
      </div>
    )
  }
}

export default App
