import React, { Component } from "react";
// var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
import {CanvasJSChart} from 'canvasjs-react-charts'
import {Redirect} from "react-router-dom";
import {toast} from "react-toastify";
const axios = require('axios');
var updateInterval = 500;
var dataPoints = [];

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            angular_count: 0,
            java_count: 0,
            no_users_given_feedback: 0,
            no_users_not_given_feedback: 0,
            node_count: 0,
            react_count: 0,
            points: []
        };
         this.updateChart = this.updateChart.bind(this);
    }

    updateChart( response =  null) {
        var temp = [];
        temp.push( { y: response.data.resp.react_count, label: "React JS" })
        temp.push( { y: response.data.resp.node_count, label: "Node JS" })
        temp.push( { y: response.data.resp.angular_count, label: "Angular" })
        temp.push( { y: response.data.resp.java_count, label: "Java" })
        this.setState({points:temp});
    }
    componentDidMount = async () => {

            const response = await axios.get(process.env.REACT_APP_API_URL+'/survey-data')
                .then( (response) => {
                    this.updateChart(response);
                    this.setState({no_users_given_feedback:response.data.resp.no_users_given_feedback});
                    this.setState({no_users_not_given_feedback:response.data.resp.no_users_not_given_feedback});
                    this.updateChart(response);
                    this.forceUpdate();
                    return response;
                })
                .catch( (error) => {
                    console.log('err::',error);
                });
   }

    render() {
        const options = {
            animationEnabled: true,
            exportEnabled: false,
            theme: "dark2", // "light1", "dark1", "dark2"
            title:{
                text: "Survey"
            },
            width:450,
            height:180,
            data: [{
                type: "pie",
                indexLabel: "{label}: {y}%",
                startAngle: -90,
                dataPoints: this.state.points
            }]
        }

        return (
            <div className="auth-wrapper">
                <div className="dash-inner">
                <div className="row" style={{backgroundColor:'#ffffff'}}>
                <div className='col-md-12'>
                    <div style={{backgroundColor:'#000000',color:'#ffffff',float:"left"}} className='col-md-5'>
                        <h5>Total no of users attended the survey</h5>
                        <h2>{this.state.no_users_given_feedback}</h2>
                    </div>
                    <div className='col-md-1'></div>
                    <div style={{backgroundColor:'#000000',color:'#ffffff',float:"right"}} className='col-md-5'>
                        <h5>Total no of users not attended the survey</h5>
                        <h2>{this.state.no_users_not_given_feedback}</h2>
                    </div>
                </div>
                </div>
                    <div className='row' style={{paddingTop:25}}>
                        <div className='col-md-1'></div>
                        <div className='col-md-12' >
                            <CanvasJSChart options = {options}
                                           onRef={ref => dataPoints = ref}
                            />
                        </div>
                        <div className='col-md-1'></div>

                        {/*<div className="col-md-12">*/}
            {/*    <div className="col-md-6">*/}
            {/*    <CanvasJSChart options = {options}*/}
            {/*    />*/}
            {/*    </div>*/}
            {/*    <div className="col-md-6">*/}
            {/*        <CanvasJSChart options = {chartOptions}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            </div>
                </div>
            </div>
        );
    }
}
export default Dashboard;