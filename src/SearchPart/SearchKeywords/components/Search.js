import React, { Component } from 'react';
import { connect } from 'react-redux';

import {fetchResult} from '../actions';
import PropTypes from 'prop-types';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tmpInput: ''
        };
        this.setInput = this.setInput.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    componentDidMount() {
        this.setState({tmpInput:'react'});
        setTimeout(()=>this.props.fetchResult('react'),1000);
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
        let fetchResultFunc = () => fetchResult(tmpInput);
        
        return (
            <div className="search">
                <input onChange={this.setInput} value={tmpInput}/>
                <button className="submit" onClick={fetchResultFunc}>search</button>
                <button className="cancel" onClick={this.clearInput}>cancel</button>
            </div>
        )
    }
}

const mapDispatch = {
    fetchResult
};

Search.propTypes={
    fetchResult:PropTypes.func,
}
export default connect(null,mapDispatch)(Search);