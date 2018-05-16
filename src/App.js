import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let key = process.env.REACT_APP_APIKEY;
let userMailAdressb = '';
// this.setState({ userMailAdress:  });

class App extends Component {
    state = {
        userMailAdress: ''
    };

    onChange = e => {
        userMailAdressb = e.target.value;

        this.setState({ userMailAdress: userMailAdressb });

        //console.log(userMailAdress);
    };

    validSubscripion = () => {
        //read the email from the state and put it in the url

        console.log(key);

        let urlOne = `https://cors-anywhere.herokuapp.com/https://us18.api.mailchimp.com/2.0/lists/subscribe.json?apikey=${key}&id=4d8d765e84&email[email]=${userMailAdressb}&double_optin=true&send_welcome=falsebb43f9f262`;

        console.log(urlOne);
        fetch(urlOne)
            .then(response => response.json())
            .then(data => {
                if (data.status === null) {
                    alert('Subscribed!');
                }
                if (data.status === 'error');
                {
                    alert('Error');
                }
            });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">
                        Welcome to React{process.env.REACT_APP_APIKEY}
                    </h1>
                </header>
                <p className="App-intro">To get started to Login</p>

                <div className="simform-inner">
                    <li>
                        <span>
                            <label htmlFor="Email">Email Adress </label>
                        </span>
                        <input type="Email" onChange={this.onChange} />
                    </li>

                    <button
                        onClick={this.validSubscripion}
                        className="submit"
                        type="Subscribe"
                        style={{ color: 'blue' }}
                    >
                        subscribe
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
