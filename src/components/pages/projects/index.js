import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../../../actions';

import style from './style.less';

import Details from './proj-details';


class Projects extends Component {
    showList(){
        return this.props.projs.map((proj)=>{
            return <li onClick={()=> this.props.select (proj)} key={proj.id}>{proj.name}</li>
        })
    }
    render() {
        return (
            <div className={style.main_wrap}>
                <ul>
                    {this.showList()}
                </ul>
                <Details/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        projs: state.projs
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Projects);
