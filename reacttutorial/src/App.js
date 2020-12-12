import React, { Component } from 'react';
import Employee from './Employee';
import Widget from './Widget';
import logo from "./MyImage.jpg";
import ErrorBoundary from './errorBoundary';

class App extends Component{  

  render(){
   
    return(
      <>
      <h1>Error Boundaries</h1> 
      <ErrorBoundary>
      <Employee/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Widget profileimage=""/>   
      </ErrorBoundary> 
      </>
    );
  }
}

export default App;
