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
  componentWillReceiveProps(nextProps) {
    this.setState({
      count: nextProps.initialCount
    })
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
        Count state: {this.state.count}
        <button onClick={this.decClick}>Decrease</button>
        <button onClick={this.incClick}>Increase</button>
      </div>
    )
  }
}

class InitialCountForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      newCount: 0
    }
  }
  handleSubmit(event) {
    this.setState({
      count: Number(this.state.newCount),
      newCount: this.state.newCount
    })
    this.props.appCallback(Number(this.state.newCount))
  }
  handleForm(event) {
    this.setState({
      count: Number(this.state.count),
      newCount: event.target.value
    })
  }
  render() {
    return (
      <div>
        <label>
          Set count state:
          <input
            type="text"
            placeholder="Set count state"
            onChange={this.handleForm.bind(this)}
          />
        </label>
        <button type="button" onClick={this.handleSubmit.bind(this)}>
          Submit this
        </button>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { initialCount: 0 }
  }
  countCallback = newCount => {
    this.setState({
      initialCount: newCount
    })
  }
  render() {
    let count = this.state.initialCount
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <p>
          <Counter initialCount={count} />
          <InitialCountForm appCallback={this.countCallback} />
        </p>
        <Instructions
          shouldDisplayImage={true}
          items={['first', 'second', 'third', 'fourth', 'gg', 'asdf', '12']}
        />
      </div>
    )
  }
}

export default App
