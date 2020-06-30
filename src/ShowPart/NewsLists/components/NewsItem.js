import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, likeItem } from '../actions';

const NewsItem = (props) => {
    let { author, num_comments, title, url, kind, like, itemID, deleteItem, likeItem, points, created } = props;
    console.log(like)
    let delItem = () => deleteItem(itemID);
    let likItem = (e) => {
        likeItem(itemID);
        like = !like;
        e.target.className = like ? 'forlike' : 'fordislike';
    }
    return (
        <div className="newsitem">
            <div className="itemlike">
                <div className="item">
                    <div>{'type: ' + kind}</div>
                    <a href={url} className="link">{title}</a>
                    <div>
                        <span>{'by '}<a href={'https://news.ycombinator.com/user?id=' + author} className="author">{author}</a></span>
                        <span className="created">{'created at ' + (new Date(created)).toDateString()}</span>
                        <span>{' | comments '}<a href={'https://news.ycombinator.com/item?id=' + itemID} className="comment">{num_comments + ' '}</a></span>
                        <span className="scores">{' | scores: ' + points}</span>
                    </div>
                </div>
                <div className="like">
                    <div className={like ? 'forlike' : 'fordislike'} onClick={likItem}></div>
                </div>
            </div>
            <span className="delete" onClick={delItem}>
                <span>X</span>
            </span>
        </div>
    )
}

const mapDispatch = {
    deleteItem,
    likeItem
}

export default connect(null, mapDispatch)(NewsItem);