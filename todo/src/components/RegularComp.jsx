import React, { Component } from 'react'

// shouldComponentUpdate() -> by default return true


export class RegularComp extends Component {
  render() {
    console.log("-------------Regular Component-------------- ", this.props.name)
    return (
      <div>Regular Component - {this.props.name}</div>
    )
  }
}

