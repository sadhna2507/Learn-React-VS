import React, { Component } from "react";

export class Greetings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }


//   getWWelccomeMsg = () => {
//     let welcomeMessage;
//     if(this.state.isLoggedIn){
//         welcomeMessage = <p>Welcome Sadhna</p>
//     }else{
//         welcomeMessage = <p>Please Login</p>
//     }
//     return welcomeMessage
//   }

// optimising above code
getWWelccomeMsg = () => {
    let welcomeMessage = <p>Please Login</p>
    if(this.state.isLoggedIn){
        welcomeMessage = <p>Welcome Sadhna</p>
    }
    return welcomeMessage
  }

  //   render() {
  //     return this.state.isLoggedIn ? <p>Welcome Sadhna</p> : <p>Please login</p>
  //   }

  // doing it by using if condition
  // if condition will work in render not in return
  // render() {
  //     if(this.state.isLoggedIn){
  //         return <p>Welcome Sadhna</p>
  //     }else{
  //         return <p>Please login</p>
  //     }
  //   }

  // problem in using if in render

  // render() {
  // if(this.state.isLoggedIn){
  //     return (
  //         <>
  //         <h2>Welcome Sadhna</h2>
  //         <p>This is our first class</p>
  //         </>
  //     )
  // }else{
  //     return(
  //         <>
  //         <p>Please login</p>
  //         <p>This is our first class</p>
  //         </>
  //     )
  // }

  //     return (
  //         <>
  //         {this.state.isLoggedIn ? <h2>Welcome Sadhna</h2> : <h2>Please login</h2>}
  //         <p>This is our first class</p>
  //         </>
  //       )
  //   }

  // store it in a variable

  render() {

    // let welcomeMessage;
    // if(this.state.isLoggedIn){
    //     welcomeMessage = <p>Welcome Sadhna</p>
    // }else{
    //     welcomeMessage = <p>Please Login</p>
    // }
    // return (
    //   <>
    //     {welcomeMessage}
    //     <p>This is our first class</p>
    //   </>
    // );

    return(
        <>
        {this.getWWelccomeMsg()}
        <p>This is our First ClassS</p>
        </>
    )
  }
}
