import React, { Component } from 'react'

export class Button extends Component {
  //state

  constructor(props) {
    super(props)

    this.state = {
      text: "submit"
    }
  }

  render() {
    let { btnClass} = this.props
    return (
      // <button style = {{background: "aqua"}} className={this.props.btnClass}>{this.props.text}</button>
      <button style = {{background: "aqua"}} className={btnClass}>{this.state.text}</button>
    )
  }
}
