import React, { Component } from 'react';
import { connect } from 'react-redux';

import {fetchResult} from '../actions';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// style-components
const StyleInput = styled.input`
    margin: 2px 5px;
    border: 1px solid #000;
    border-radius: 2px;
`
const StyleButton = styled.button`
    margin-right:3px;
    border:1px solid hsla(0, 5%, 55%, 0.47);
    background-color: hsla(0, 5%, 66%, 0.47);
    border-radius: 3px;
`

// noraml defination
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
                <StyleInput onChange={this.setInput} value={tmpInput} type="text"/>
                <StyleButton className="submit" onClick={fetchResultFunc}>search</StyleButton>
                <StyleButton className="cancel" onClick={this.clearInput}>cancel</StyleButton>
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

export { StyleInput, StyleButton,Search}