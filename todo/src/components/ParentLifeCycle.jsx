import React, { Component } from 'react'
import { PureComp } from './PureComp'
import { RegularComp } from './RegularComp'

export class ParentLifeCycle extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: "sadhna",
    }
  }
  render() {
    console.log("------------Parent Component--------------")
    return (
      <div>
        <p>Parent Component</p>
        <PureComp name = {this.state.name}/>
        <RegularComp name = {this.state.name}/>
        <button onClick={() => {this.setState({name: "Chandni"})}}>Change name</button>
        <button onClick={()=> this.forceUpdate()}>Force Update</button>
      </div>
    )
  }
}
