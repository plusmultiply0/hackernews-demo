import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, likeItem } from '../actions';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

// style-component
const StyleSpan = styled.span`
    font-size: 0.9em;
    margin-right:5px;
    margin-top:5px;
`
const StyleScore = styled(StyleSpan)`
    color:hsla(21, 94%, 51%, 0.79) !important;
`
const StyleTitle = styled.a`
    display: block;
    color: aliceblue;
    /* height:25px; */
    font-size: 1.2em;
    font-weight: 700;
    margin-left: 4px;
    margin-top: 4px;
    /* overflow:hidden; */
`
const StyleItem = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  padding: 4px 2px;
`

// normal defination
const NewsItem = (props) => {
    let { author, num_comments, title, url, kind, like, itemID, deleteItem, likeItem, points, created } = props;
    
    let delItem = () => deleteItem(itemID);
    let likItem = (e) => {
        likeItem(itemID);
        like = !like;
        e.target.className = like ? 'forlike' : 'fordislike';
    }
    return (
        <div className="newsitem">
            <div className="itemlike">
                <StyleItem className="item">
                    <div>{'type: ' + kind}</div>
                    <StyleTitle href={url} className="link">{title.length>50?title.split(' ').slice(0,-5).join(' ')+' ...':title}</StyleTitle>
                    <div>
                        <StyleSpan>{'by '}<a href={'https://news.ycombinator.com/user?id=' + author} className="author">{author}</a></StyleSpan>
                        <StyleSpan className="created">{'created at ' + (new Date(created)).toDateString()}</StyleSpan>
                        <StyleSpan>{' | comments '}<a href={'https://news.ycombinator.com/item?id=' + itemID} className="comment">{num_comments}</a>{' | scores: '}</StyleSpan>
                        <StyleScore className="scores">{ points}</StyleScore>
                    </div>
                </StyleItem>
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

NewsItem.propTypes = { 
    author:PropTypes.string, 
    num_comments:PropTypes.number, 
    title:PropTypes.string, 
    url:PropTypes.string, 
    kind: PropTypes.string, 
    like: PropTypes.bool, 
    itemID: PropTypes.string, 
    deleteItem: PropTypes.func, 
    likeItem: PropTypes.func, 
    points: PropTypes.number, 
    created: PropTypes.string 
}
export default connect(null, mapDispatch)(NewsItem);