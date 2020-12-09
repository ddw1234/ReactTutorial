import React, { Component } from 'react';
import './App.css';
import Employee from './liftingstate/Employee';
import {Provider} from './context';


class App extends Component{

  state={
    name:"Dinesh",
    department:"Science",
    salary:500

  }

changehandler=()=>{
  this.setState({salary:this.state.salary*50});
}

  render(){

    const data={
      salary:this.state.salary,
      clickChange:this.changehandler
    }
    return(
      <>
      <h1>App Component</h1>
      <Provider value={data}>
        <Employee/>
      </Provider>
      </>
    );
  }
}

export default App;
