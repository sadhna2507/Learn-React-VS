import React, { PureComponent } from 'react'


// shouldComponentUpdate -> validate current props and newly coming props
// if both are same, returns false
// if there is any diff, returns true


export class PureComp extends PureComponent {
  render() {
    console.log("------------Pure Component--------------", this.props.name)
    return (
      <div>Pure Component - {this.props.name}</div>
    )
  }
}


// parent state -> Chandni changes
// child props -> child props changes
// updation phase -> compwilreceiveProps, shouldcompupdate,compwillupdate, render, compdidupdate
