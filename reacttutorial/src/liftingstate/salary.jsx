import React,{Component} from 'react';
import {MyContext} from '../context';

class Salary extends Component{

    static contextType=MyContext;

    render(){
     
        const {salary,clickChange}=this.context;

        return(
            <>
            <h1>Salary Details</h1>          
        <h1>Salary : {salary}</h1>
        <button onClick={clickChange}>Change Salary</button>
        
            </>
        )
    }
}

export default Salary;