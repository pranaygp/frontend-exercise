import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Instructions extends Component {
  static propTypes = {
    shouldDisplayImage: PropTypes.bool.isRequired
  }
  render() {
    return (
      <div className="instructions">
        Follow the instructions on the README to get started!
        {this.props.shouldDisplayImage && (
          <img
            className="instructions__logo"
            src="https://uiuc.hack4impact.org/img/colored-logo.png"
            alt="h4i logo"
          />
        )}
      </div>
    )
  }
}

export default Instructions
