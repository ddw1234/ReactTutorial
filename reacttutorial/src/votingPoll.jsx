import React, { Component } from 'react';


const CM = (Party,vote)=>{

class NewCM extends Component{

    state={
        voteCount:0
    }

    voteHandler=()=>{
        this.setState(
            {
                voteCount:this.state.voteCount + vote
            }
        )
    }


    render(){

        return(
            <>
            <Party voteFor="CMfor"  
            
            hocVoteCount={this.state.voteCount}
            hocvoteHandler={this.voteHandler}
            {...this.props}           
            
            />
           
            </>
        );
    }
} 

return NewCM;

}

export default CM;