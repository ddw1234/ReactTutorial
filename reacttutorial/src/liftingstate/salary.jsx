import React,{Component} from 'react';
import {Consumer} from '../context';

class Salary extends Component{

    render(){
        return(
            <>
            <h1>Salary Details</h1>
            <Consumer>
        {({salary,clickChange})=>
        <>
        <h1>Salary : {salary}</h1>
        <button onClick={clickChange}>Change Salary</button>
        </>}
      </Consumer>
            </>
        )
    }
}

export default Salary;