import React, { Component } from 'react';
import Kind from './Kind';
import {connect} from 'react-redux';
import { changeKind} from '../actions';
// constant
const klists = [
    'like',
    'comments',
    'scores'
]

class KindLists extends Component{
    constructor(props){
        super(props);
        this.state={selectValue:'like'}
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
export default connect(null,mapDispatch)(KindLists);