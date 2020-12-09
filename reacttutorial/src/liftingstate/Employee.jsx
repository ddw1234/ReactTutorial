import React,{Component} from 'react';
import Department from './department';

class Employee extends Component{   

    render(){
        return(
           <>
           <h1>Employee Details</h1> 
           <Department/>
           </>
        );
    }

}

export default Employee;