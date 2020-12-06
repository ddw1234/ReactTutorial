import React,{Component} from 'react';
import Department from './department';
import Salary from './salary';
import {Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Employee extends Component{

    constructor(props){
        
        super(props);
        this.state={
            name:"Ramesh",
            workingDay:26,
            workingHours:8,
            chargePerHour:10,
            totalSalary:''
        }
    }

    changeNameHandler=(event)=>{
        const ename=event.target.value;
        this.setState({name:ename})
    }

    changeWorkDaysHandler=(event)=>{
        const wdays=event.target.value;
        this.setState({workingDay:wdays})
    }

    

    render(){
        return(
           <>
           <h1>Employee Details</h1>
          
           {/* <h2>Employee Name : {this.state.name} </h2>
           <h2>Employee Working day : {this.state.workingDay} </h2>  */}
<div className="container">
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Employee Name</Form.Label>
    <Form.Control type="text" value={this.state.name} placeholder="Enter Employee Name" onChange={this.changeNameHandler} />    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Working days</Form.Label>
    <Form.Control type="text" value={this.state.workingDay} placeholder="Enter Working days" onChange={this.changeWorkDaysHandler} />
  </Form.Group> 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>      
           <Department name={this.state.name}
            workingdays={this.state.workingDay}
            workinghours={this.state.workingHours}
           />
           <Salary name={this.state.name}
             workingdays={this.state.workingDay}
             workinghours={this.state.workingHours}
             chargePerHour={this.state.chargePerHour}
           />
           </>
        );
    }

}

export default Employee;