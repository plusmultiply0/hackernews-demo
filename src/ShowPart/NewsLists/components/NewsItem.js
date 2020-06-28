import React from 'react';
import {connect} from 'react-redux';
import { deleteItem, likeItem} from '../actions';

const NewsItem = (props) => {
    let { author, num_comments, title, url, kind, like, itemID, deleteItem, likeItem} = props;
    console.log(like)
    let delItem = ()=>deleteItem(itemID);
    let likItem = (e)=>{
        likeItem(itemID);
        like = !like;
        e.target.className = like ? 'forlike' : 'fordislike';
    }
    return(
        <div className="newsitem">
            <span>{kind}</span>
            <a href={url}>{title}</a>
            <span>{author}</span>
            <span>{num_comments}</span>
            <span className={like ? 'forlike' : 'fordislike'} onClick={likItem}></span>
            <span className="delete" onClick={delItem}>x</span>
        </div>
    )
}

const mapDispatch = {
    deleteItem,
    likeItem
}

export default connect(null,mapDispatch)(NewsItem);