import React, {Component} from "react";
import { Button } from "./components/Button";
import "./App.css"


export class App extends Component{
  render(){
    console.log(this)
    return(
      <div>
        <h1>Title: {this.props.name} and the water bottle</h1>
        <p>story of a water bottle</p>
        <Button text = "Delete"  btnClass = "delete"/>
        <Button text = "Save"  btnClass = "save"/>
      </div>
    )
  }
}