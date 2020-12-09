import React,{Component} from 'react';
import Salary from './salary';

class Department extends Component{

    render(){
        return(
            <>
            <h1>Department Details</h1>
            <Salary/>
            </>
        )
    }
}

export default Department;