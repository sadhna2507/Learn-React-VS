import React, { Component } from 'react'

export class Name extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         names: ['mahi', 'priya', 'anu', 'ram'],
      }
    }


  render() {
    return (
    //   <div>
    //     <p>{this.state.names[0]}</p>
    //     <p>{this.state.names[1]}</p>
    //     <p>{this.state.names[2]}</p>
    //     <p>{this.state.names[3]}</p>
    //   </div>

    this.state.names.map((name) => <p>{name}</p>)
    )
  }
}
