import React,{Component} from 'react';

class Salary extends Component{

    render(){
        return(
            <>
            <h1>Salary Details</h1>
            <h2>Employee Name : {this.props.name} </h2>
            <h2>Total Hours :  {this.props.workingdays * this.props.workinghours} </h2>
            <h2>Charge per hour : {this.props.chargePerHour} </h2>
            <h2>Total Salary :  {this.props.workingdays * this.props.workinghours * this.props.chargePerHour}  </h2>
            </>
        )
    }
}

export default Salary;