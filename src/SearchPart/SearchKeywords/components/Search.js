import React, { Component } from 'react';
import { connect } from 'react-redux';

import {fetchResult} from '../actions';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tmpInput: ''
        };
        this.setInput = this.setInput.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    setInput(event){
        this.setState({
            tmpInput:event.target.value
        })
    }

    clearInput(){
        this.setState({
            tmpInput:''
        })
    }

    render() {
        const {tmpInput}=this.state;
        // 
        const { fetchResult}=this.props;
        
        return (
            <div className="search">
                <input onChange={this.setInput} value={tmpInput}/>
                <button className="submit" onClick={fetchResult}>search</button>
                <button className="cancel" onClick={this.clearInput}>cancel</button>
            </div>
        )
    }
}

const mapDispatch = {
    fetchResult
};

export default connect(null,mapDispatch)(Search);