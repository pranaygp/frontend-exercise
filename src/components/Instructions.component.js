import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Instructions extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    if (this.props.shouldDisplayImage) {
      return (
        <div className="instructions">
          Follow the instructions on the README to get started!
          <img
            className="instructions__logo"
            src="https://uiuc.hack4impact.org/img/colored-logo.png"
            alt="h4i logo"
          />
        </div>
      )
    }
    return (
      <div className="instructions">
        Follow the instructions on the README to get started!
        <img
          className="instructions__logo"
          src="https://uiuc.hack4impact.org/img/colored-logo.png"
          alt="h4i logo"
        />
      </div>
    )
  }
}

Instructions.propTypes = {
  shouldDisplayImage: PropTypes.bool
}
Instructions.defaultProps = {
  shouldDisplayImage: false
}

export default Instructions
