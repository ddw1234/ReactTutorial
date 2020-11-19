import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

class Employee extends Component{
   
    constructor(props){

        super(props);

        this.state={
         name:this.props.name,
         empid:this.props.empid,
         salary:this.props.salary
        };
    }

    Updatestatevalue =()=>{
        let name=this.state.name;
        let empid=this.state.empid;
        let salary=this.state.salary;

        this.setState({
            name:"Dinesh1",
         empid:"2",
         salary:3000
        });
    }



    render(){
        return(
            <div>
                <h1>Hello Employee</h1>
                <h1>Emplyee name : {this.state.name}</h1>
                <h1>Emplyee empid : {this.state.empid}</h1>
                <h1>Emplyee salary : {this.state.salary}</h1>
                <button onClick={this.Updatestatevalue}>Update info</button>
            </div>
        )
    }
}

ReactDOM.render(<Employee  name="dinesh1" empid="2" salary="2000" />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
