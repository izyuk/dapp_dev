import React, { Component } from 'react';
import {connect} from 'react-redux';

class Details extends Component{
    render(){
        if(!this.props.proj){
            return(
                <p>Choose your project..</p>
            )
        }
        return(
            <div>
                <p>{this.props.proj.description}</p>
                <img src={this.props.proj.img} alt=""/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        proj: state.active
    };
}

export default connect(mapStateToProps)(Details);