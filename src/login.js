import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const axios = require('axios');

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect: false
        };
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value});
    }
    handlePassword = (event) => {
        this.setState({password: event.target.value});
    }

    submit = async (event) => {
        event.preventDefault();
        const response =await axios.post(process.env.REACT_APP_API_URL+'/login', this.state)
            .then( (response) => {
                localStorage.setItem('userid', response.data.user._id);
                this.setState({redirect:true});
                return response;
            })
            .catch( (error) => {
                console.log('err::',error);
            });
    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
            <form onSubmit={this.submit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" onChange={this.handleEmail} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={this.handlePassword} className="form-control" placeholder="Enter password" />
                </div>
                { this.state.redirect && <Redirect to="/survey" /> }
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
                </div>
            </div>
        );
    }
}

export default Login;