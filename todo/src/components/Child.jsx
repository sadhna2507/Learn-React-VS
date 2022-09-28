import React  from 'react'

export class Child extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         childText: "Child Default"
      }
    }

    childTextChange = () => {
        this.setState({
            childText: "child changed"
        })
    }


  render() {
    console.log("child");
    console.log("child props", this.props);
    return (
      <div>
        <h2>This is a Child Component- {this.state.childText}</h2>
        <button onClick={this.childTextChange}>Child</button>
        <button onClick={this.props.changeParentText}>change parent from child</button>
      </div>
    )
  }
}
