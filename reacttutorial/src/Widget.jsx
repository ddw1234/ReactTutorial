import React, { Component } from 'react';


class Widget extends Component{

    render(){

        if(this.props.profileimage=='')
        {
            throw new Error('Image not found');
        }

        return(
            <>
            <h1>Profile Image</h1>
            <img src={this.props.profileimage} alt="Profile Logo"/>
            
            </>

        );
    }
}

export default Widget;