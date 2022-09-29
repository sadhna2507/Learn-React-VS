import React, { Component } from 'react'

export class LifeCycle extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 1,
      }
    }

    incrementCount = () => {
        this.setState((prevState) =>({
            count: prevState.count +1
        }))
    }

    //   lifecycle methods
  componentWillMount() {
    console.log("component will mount");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  shouldComponentUpdate() {
    console.log("should component update");
    return true;
  }

  componentWillUpdate() {
    console.log("component will update");
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
    // alert("in unmounting phase");
  }

  
  render() {
    return (
      <div>
        <h1>count - {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    )
  }
}
