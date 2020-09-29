import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import GoogleContacts from 'react-google-contacts';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import SignUp from "./singup";
import Login from "./login";
import Dashboard from "./dashboard";
import Survey from "./survey";
import { connect } from "react-redux";

const responseCallback = (response) => {
}

function App() {
  return (
    <div className="App">
        <Router>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={"/sign-in"}>Survey</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/sign-in"}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path="/sign-in" component={Login} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/survey" component={Survey} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>

        </Router>
    </div>
  );
}

export default App;
