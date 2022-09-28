import React, { Component } from 'react'
import { Child } from './components/Child'


export class Parent extends Component {

    constructor(props) {
      super(props)
    

      //Initialize the state here

      this.state = {
         parentText: "Parent Default"
      }
    }

    changeParentText = () => {
      this.setState({
          parentText: "parent changed"
      })
  }
  render() {
    console.log("parent");
    return (
        // <React.Fragment>
      <>
        <h1>This is a Parent Component - {this.state.parentText}</h1>
        <button onClick={this.changeParentText}>Parent</button>
        {/* <Child parentText = {this.state.parentText} />  */}
        <Child changeParentText = {this.changeParentText} /> 
      </>
    //   </React.Fragment>
    )
  }
}
