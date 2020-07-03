import React, { Component } from 'react';
import Kind from './Kind';
import {connect} from 'react-redux';
import { changeKind} from '../actions';
import PropTypes from 'prop-types';
// constant
const klists = [
    'none',
    'like',
    // 'comments',
    // 'scores'
]

class KindLists extends Component{
    constructor(props){
        super(props);
        this.state={selectValue:'none'}
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(e){
        this.setState({selectValue:e.target.value});
    }
    render(){
    const state = this.state;
    const confirm = () => this.props.changeKind(state.selectValue);
    return (
        <div className="filter">
            <label htmlFor="kindL">Filter by:</label>
            <select className="kind" id="kindL" onChange={this.handleSelect} value={state.selectValue}>
                {
                    klists.map((item) => <Kind key={item}>{item}</Kind>)
                }
            </select>
            <button className="confirm" onClick={confirm}>Confirm</button>
        </div>
    )
    }
}
const mapDispatch = {
    changeKind
}

KindLists.propTypes={
    changeKind:PropTypes.func
}
export default connect(null,mapDispatch)(KindLists);