import React from 'react';
import {connect} from 'react-redux';
import { fetchResult} from '../../SearchKeywords';
import {findItem} from '../../../utility';
import PropTypes from 'prop-types';

const SearchMore = (props)=>{
    const {moreValue,searchTerm,page} = props;
    const search = ()=>moreValue(searchTerm,page+1);
    return(
        <div className="more" onClick={search}>
            More
        </div>
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