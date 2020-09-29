import React, { Component } from "react";
import {toast, ToastContainer} from "react-toastify";
import {Redirect} from "react-router-dom";
const axios = require('axios');

class Survey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            redirect: false
        };
    }

    handleAnswer = (event) => {
        this.setState({answer:event.target.value});
    }

    submit = async (event) => {
        event.preventDefault();
        let obj = {
            answer: this.state.answer,
            user_id: localStorage.getItem('userid')
        }
        const response =await axios.post(process.env.REACT_APP_API_URL+'/survey', obj)
            .then( (response) => {
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
                    { this.state.redirect && <Redirect to="/dashboard" /> }

                    <form onSubmit={this.submit}>
                <h3>Feedback</h3>
                <ToastContainer />
                <div className="form-group">
                    <h3>Which technology do you like most?</h3>
                    <input type="radio" onChange={this.handleAnswer} name = "ans" value="react js"/> React JS
                    <input type="radio" onChange={this.handleAnswer} name = "ans" value="node js"/> Node JS
                    <input type="radio" onChange={this.handleAnswer} name = "ans" value="angular"/> Angular
                    <input type="radio" onChange={this.handleAnswer} name = "ans" value="java"/> Java
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </div>
            </form>
                </div>
            </div>
        );
    }
}
export default Survey;