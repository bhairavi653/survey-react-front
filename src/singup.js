import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Redirect} from 'react-router-dom';
const axios = require('axios');

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            redirect: false
        };
    }

    handleFirstname = (event) => {
        this.setState({firstname: event.target.value});
    }
    handleLastname = (event) => {
        this.setState({lastname: event.target.value});
    }
    handleEmail = (event) => {
        this.setState({email: event.target.value});
    }
    handlePassword = (event) => {
        this.setState({password: event.target.value});
    }
    submit = async (event) => {
        event.preventDefault();
        const response =await axios.post(process.env.REACT_APP_API_URL+'/register', this.state)
            .then( (response) => {
                this.setState({redirect: true});
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
                    { this.state.redirect && <Redirect to="/sign-in" /> }

                    <form onSubmit={this.submit}>
                <h3>Sign Up</h3>
                <ToastContainer />
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" onChange={this.handleFirstname} placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" onChange={this.handleLastname} placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" onChange={this.handleEmail} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={this.handlePassword} placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block" >Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
                </div>
            </div>
        );
    }
}
export default SignUp;