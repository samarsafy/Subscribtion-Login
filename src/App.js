import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    userMailAdress: ""
  };

  validSubscripion = () => {
    //read the email from the state and put it in the url
    let urlOne = `https://cors-anywhere.herokuapp.com/https://us18.api.mailchimp.com/2.0/lists/subscribe.json?   apikey=91cfde92b3f1c432f40b7c011a5120a5-us18&id=4d8d765e84&email[email]=${
      this.state.userMailAdress
    }&double_optin=true&send_welcome=falsebb43f9f262`;

    let formInput = "";
    fetch(urlOne)
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp);
        if (resp.email !== undefined) {
          alert("Subscribed!");
        } else if (resp.password === "") {
          alert("You did not subscribe");
        }
      });
  };

  onChange = e => {
    this.setState({ userMailAdress: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">To get started to Login</p>
        <form id="TheForm" className="simform">
          <div className="simform-inner">
            <li>
              <span>
                <label htmlFor="Email">Email Adress </label>
              </span>
              <input
                id="q1"
                className="q1"
                type="Email"
                onChange={this.onChange}
              />
            </li>
            <li>
              <span>
                <label htmlFor="Password">Password </label>
              </span>
              <input className="" type="Password" />
            </li>

            <button
              onClick={this.validSubscripion}
              className="submit"
              type="Subscribe"
              style={{ color: "blue" }}
            >
              subscribe
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
