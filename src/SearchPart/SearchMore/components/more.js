import React from 'react';
import {connect} from 'react-redux';
import { fetchResult} from '../../SearchKeywords';
import {findItem} from '../../../utility';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// style 
const StyleButton = styled.button`
    border: 1px solod hsla(0, 15%, 20%, 0.86);
    border-radius: 10px;
    /* width: 10%; */
    padding: 4px 4px;
    margin: 5px 0;
    background-color: brown;
    color: #fff;
    font-size:1.1em;
`

// normal defination
const SearchMore = (props)=>{
    const {moreValue,searchTerm,page} = props;
    const search = ()=>moreValue(searchTerm,page+1);
    return(
        <StyleButton className="more" onClick={search}>
            More
        </StyleButton>
    )
}

const mapDispatch = {
    moreValue: fetchResult
}

const mapState = (state) =>({
    searchTerm: state.news.keywords[0],
    page: findItem(state, state.news.keywords[0]).oldPage
})

SearchMore.propTypes={
    moreValue:PropTypes.func,
    searchTerm:PropTypes.string,
    page:PropTypes.number
}
export default connect(mapState,mapDispatch)(SearchMore);
export { SearchMore, StyleButton}