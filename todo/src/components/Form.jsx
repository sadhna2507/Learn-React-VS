import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        email: "",
        password: "",
        country: "usa",
      };
    }
  
    handleEmail = (event) => {
      // console.log(event.target.value);
      this.setState(
        {
          email: event.target.value,
        },
        () => {
          console.log("email ->", this.state.email);
        }
      );
    };
  
    handlePassword = (event) => {
      // console.log(event.target.value);
      this.setState(
        {
          password: event.target.value,
        },
        () => {
          console.log("password ->", this.state.password);
        }
      );
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state.email, this.state.password);
    };
  
    handleSelect = (event) => {
      console.log(event.target.value);
      this.setState({
        country: event.target.value,
      });
    };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={this.handleEmail}
              value={this.state.email}
            />
          </div>
          <div>
            <label htmlFor="pwd">Password: </label>
            <input
              type="text"
              name="password"
              id="pwd"
              onChange={this.handlePassword}
              value={this.state.password}
            />
          </div>
          <div>
            <select
              onChange={this.handleSelect}
              value={this.state.country}
              name="countries"
              id="countries"
            >
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
            </select>
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    ) 
  }
}
