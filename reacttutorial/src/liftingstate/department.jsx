import React,{Component} from 'react';

class Department extends Component{

    render(){
        return(
            <>
            <h1>Department Details</h1>
            <h2>Employee Name : {this.props.name} </h2>
            <h2>Working days : {this.props.workingdays} </h2>
            <h2>Working hours: {this.props.workinghours} </h2>
            </>
        )
    }
}

export default Department;