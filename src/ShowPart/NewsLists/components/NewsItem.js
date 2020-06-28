import React from 'react';

const NewsItem = (props) => {
    let { author, num_comments, title, url, kind, like} = props;
    return(
        <div className="newsitem">
            <span>{kind}</span>
            <a href={url}>{title}</a>
            <span>{author}</span>
            <span>{num_comments}</span>
            <span className={like ? 'forlike' : 'fordislike'} onClick={(e) => { like = !like; e.target.className = like ? 'forlike' : 'fordislike';}}></span>
        </div>
    )
}

export default NewsItem;