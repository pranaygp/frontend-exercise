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
  handleSubmit(event) {
    this.setState({
      count: Number(this.initialCount)
    })
  }
  handleForm(event) {
    this.initialCount = event.target.value
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
        <br />
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
