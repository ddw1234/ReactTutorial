import React, { Component } from 'react';
import CM from './votingPoll';

class BJP extends Component{  
   
  render(){
   
    return(
      <>
      <h1>BJP {this.props.voteFor} Candidate : {this.props.Candidate}</h1>
      <h2 onMouseOver={this.props.hocvoteHandler}>Total Vote : {this.props.hocVoteCount}</h2> 
          
      </>
    );
  }
}

export default CM(BJP,10);