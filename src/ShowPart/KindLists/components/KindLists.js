import React, { Component } from 'react';
import Kind from './Kind';
import { connect } from 'react-redux';
import { changeKind } from '../actions';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// style-components
const StyleDiv = styled.div`
    display: flex;
    margin: 2px auto;
    /* margin-left: 40%; */
    height: 25px;

`
const StyleLabel = styled.label`
    display:block;
    margin-top: 2px;
    margin-right:3px;
    height:25px;
    line-height:1;
`
const StyleButton = styled.button`
    margin-right:3px;
    border:1px solid hsla(0, 5%, 55%, 0.47);
    background-color: hsla(0, 7%, 89%);
    border-radius: 3px;
`
const StyleSelect = styled.select`
    font-size:700;
    margin-right:3px;
`
// constant
const klists = [
    'none',
    'like',
    // 'comments',
    // 'scores'
]

class KindLists extends Component {
    constructor(props) {
        super(props);
        this.state = { selectValue: 'none' }
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(e) {
        this.setState({ selectValue: e.target.value });
    }
    render() {
        const state = this.state;
        const confirm = () => this.props.changeKind(state.selectValue);
        return (
            <StyleDiv className="filter">
                <StyleLabel htmlFor="kindL">Filter by:</StyleLabel>
                <StyleSelect className="kind" id="kindL" onChange={this.handleSelect} value={state.selectValue}>
                    {
                        klists.map((item) => <Kind key={item}>{item}</Kind>)
                    }
                </StyleSelect>
                <StyleButton className="confirm" onClick={confirm}>Confirm</StyleButton>
            </StyleDiv>
        )
    }
}
const mapDispatch = {
    changeKind
}

KindLists.propTypes = {
    changeKind: PropTypes.func
}
export default connect(null, mapDispatch)(KindLists);
export { StyleDiv, StyleLabel, StyleButton, StyleSelect, KindLists}