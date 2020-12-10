import React, { Component } from 'react';
import CM from './votingPoll';


class AAP extends Component{  

    
  render(){
   
    return(
      <>
      <h1>AAP {this.props.voteFor} Candidate : {this.props.Candidate}</h1>
      <h2 onMouseOver={this.props.hocvoteHandler}>Total Vote : {this.props.hocVoteCount}</h2>     
      </>
    );
  }
}

export default CM(AAP,5);