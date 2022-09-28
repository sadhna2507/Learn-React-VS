import React, { Component } from 'react'

export class Button extends Component {
  //state

  constructor(props) {
    super(props)

    this.state = {
      // text: "submit",
      count: 0,
    }
  }
  //this.handleClick = this.handleClick.bind(this)

  // handleClick = () => {
  //   // console.log(this)
  //   if (this.state.text === "submit") {
  //     this.setState({
  //       text: "cancelled",
  //     });
  //     console.log(this.state.text);
  //   } else {
  //     this.setState({
  //       text: "submit",
  //     });
  //     console.log("else", this.state.text);
  //   }
  // };


  // increment= async() => {                //binding the event handler using arrow function
    
  //   // setstate is and asynch process

  //   await this.setState({
  //     count: this.state.count + 1 
  //   })
  //   console.log(this.state.count) //this console show one previous value than incremented value===> setstate is asynch it does not run immediately
  // };
  // using async and awit here is not a good pratice




  // to wait the setstate we can use callback as a second parameter to the setstate

  // increment=() => { 
    
  //   this.setState({
  //     count: this.state.count + 1 
  //   }, () => {
  //   console.log(this.state.count) 
  //   })
  // };

  increment = () => {
    // this.setState((prev) => {  // this simple surly braces will not work because it will take the curly braces as the block level element
    //   count: prev.count + 1  
    // });

    this.setState((prev) => {              //this will work
      return {count: prev.count + 1}
    });

    this.setState((prev) => ({             // this will also work

      count: prev.count + 1
    }))
  }

  render() {
    let { text,btnClass} = this.props
    return (
      <div>
         <button style = {{background: "aqua"}} className={this.props.btnClass}>{this.props.text}</button>
         <button onClick = {this.handleClick} className={btnClass}>{text}</button>

         <h1>{this.state.count}</h1>
         <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}
