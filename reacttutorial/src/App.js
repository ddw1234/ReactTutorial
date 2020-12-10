import React, { Component } from 'react';
import BJP from './bjp';
import AAP from './aap';

class App extends Component{  

  render(){
   
    return(
      <>
      <h1>Higher Order Component</h1> 
      <BJP Candidate="Manoj"/>  
      <AAP Candidate="Arvind"/>  
      </>
    );
  }
}

export default App;
