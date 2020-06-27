import React from 'react';

const SearchMore = (props)=>{
    const {moreValue} = props;
    return(
        <div className="more" onClick={moreValue}>
            More
        </div>
    )
}

export default SearchMore;