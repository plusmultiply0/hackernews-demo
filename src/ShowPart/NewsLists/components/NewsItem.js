import React from 'react';

const NewsItem = (props) => {
    const { author, num_comments, title, url, kind} = props;
    return(
        <div className="newsitem">
            <span>{kind}</span>
            <a href={url}>{title}</a>
            <span>{author}</span>
            <span>{num_comments}</span>
        </div>
    )
}

export default NewsItem;