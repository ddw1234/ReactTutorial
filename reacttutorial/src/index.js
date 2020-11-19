import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

class Employee extends Component{

state ={
    name:this.props.name
}

    render(){
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
            </div>
        )
    }
}

ReactDOM.render(<Employee name="Dinesh Wagh"/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
