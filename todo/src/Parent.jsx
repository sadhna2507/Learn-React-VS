import React, { Component } from 'react'
import { Child } from './components/Child'
import { Odd } from './components/Odd'
import Even from './components/Even'


export class Parent extends Component {

    constructor(props) {
      super(props)
    

      //Initialize the state here

      this.state = {
         parentText: "Parent Default",
         parentObj:{
          name: "sadhna",
          age: 20
         },
         count: 0,
         names: ["alia", "deepika", "aunshka", "kiara"] // passing array in state
      }
    }

    changeParentText = () => {
      this.setState({
          parentText: "parent changed"
      })
  }

  // changeCount = () =>{
  //   this.setState((prev) => ({    //it contain whole object in prev...so to improve it we shoul only take count prev value
  //     count: prev + 1,
  //   }))
  // }

  changeCount = () =>{
    this.setState((prev) => ({
      count: prev.count + 1,
    }))
  }
  render() {
    console.log("parent");
    return (
        // <React.Fragment>
      <>
        <h1>This is a Parent Component - {this.state.parentText}</h1>
        <button onClick={this.changeParentText}>Parent</button>
        <button onClick={this.changeCount}>increase count - {this.state.count}</button>   //it will give the entire object beacuse in prev whole object is there
        
        {this.state.count % 2 === 0 ? <Even/> : <Odd/>}    //conditional render
        {this.state.count>0 && <p>count is greater than 0</p>}

        {this.state.names.map(
          (name) => 
          name !== "alia" && (
            <>
          <p>{name} is a heroine from bolywood</p>
          <h1>this is a bollywood collection</h1>
          </>
          ))
          }

        {/* <Even/> */}
        {/* <Child parentText = {this.state.parentText} />  */}
        <Child changeParentText = {this.changeParentText}  sadhnaObj = {this.state.parentObj}/> 
      </>
    //   </React.Fragment>
    )
  }
}
