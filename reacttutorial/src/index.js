import React from 'react';
import ReactDOM from 'react-dom';
import BootForm from './form';

class NameForm extends React.Component{
 
  render(){
    return(
     <>
     <div className="container">
     <h1>Welcome to the website</h1>
     <BootForm/>
     </div>
     </>
    );
  }

}


ReactDOM.render(<NameForm/>,document.getElementById("root"));
