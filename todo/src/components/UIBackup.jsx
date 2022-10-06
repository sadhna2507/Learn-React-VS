import React, { Component } from "react";

export class UIBackup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    // console.log(error);
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    console.log(this.props);
    if (this.state.hasError) {
      return <div>Something Went Wrong</div>;
    } else {
      return <>{this.props.children}</>;
    }
  }
}