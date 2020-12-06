import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.input=React.createRef();
  }

  //To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.
  
  handleSubmit(event){
    alert('Current value is ' + this.input.current.value);
    event.preventDefault();
  }

  render(){
    return(
     <form onSubmit={this.handleSubmit}>
       <label>
         Name : <input type="text" ref={this.input}></input>
       </label>
       <input type="submit" value="Submit"></input> 
     </form>
    );
  }

}


ReactDOM.render(<NameForm/>,document.getElementById("root"));
