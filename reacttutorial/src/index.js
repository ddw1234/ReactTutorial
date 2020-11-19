import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

class Employee extends Component{
    constructor(props){
        super(props);
        this.state ={
            name:this.props.name,
            count:this.props.count,
        };

        this.Clickme=this.Clickme.bind(this);
    }

    Clickme(){
        let count=this.state.count;
        this.setState({count: ++count})
    }

    render(){
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <h1>Count= {this.state.count}</h1>
                <button onClick={this.Clickme}>Click to increment</button>
            </div>
        )
    }
}

ReactDOM.render(<Employee name="Dinesh Wagh" count="0"/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
