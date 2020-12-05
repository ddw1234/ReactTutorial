import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Regularcomp from './regularcomp';
import Purecomp from './Purecomp';
// ReactDOM.render(<App />, document.getElementById('root'));

class Parentcomp extends Component{

    constructor(props){

        super();
        this.state={
            name:"dinesh"
        }
    }

    componentDidMount(){

        setInterval(()=>{
this.setState({

    name: "Tutorial website for learn"
            })},2000)
    }

        render(){

            console.log("Parent component Render")
            return(

                <div>
                    <h1>Parent Component Name : {this.state.name}</h1>
                    <Regularcomp name={this.state.name} />
                    <Purecomp name={this.state.name} />
                </div>
            );
        }
    }

ReactDOM.render(<Parentcomp/>,document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
