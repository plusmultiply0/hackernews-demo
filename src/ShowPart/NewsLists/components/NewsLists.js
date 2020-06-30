import React, { Component } from 'react';
import NewsItem from './NewsItem';
import { connect } from 'react-redux';
import { findItem } from '../../../utility';
import { filterLists} from '../../KindLists';
import { createStore } from 'redux';
import { createSelector } from 'reselect';
// import { createSelector } from 'reselect';

const Loading = () => {
    return (
        <div className="loading">
            Loading...
        </div>
    );
}


class NewsLists extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        const { items, isCache, oldHits} = this.props.allItems;
        const propContainer = (item) => ({
            author:item.author,
            num_comments:item.num_comments ,
            title:item.title ,
            url:item.url ,
            key:item.objectID ,
            kind:item._tags[0] ,
            itemID:item.objectID ,
            points:item.points ,
            created:item.created_at ,
        });
        return (
            <div className="newlist">
                {
                    items.length !== 0
                        ?
                        (!isCache ?
                            items[0].hits.map((item) => 
                                    <NewsItem 
                                        like={false}
                                        {...propContainer(item)}
                                    />
                            )
                            : oldHits.map((item) => 
                                    <NewsItem 
                                        like={item.like}
                                        {...propContainer(item)}
                                    />
                            ))
                        : <Loading />
                }
            </div>
        );
    }
}

const getNews = (state)=> state.news;
const getFilter = (state)=>state.filter;

const getAllItems = createSelector(
    [getNews,getFilter],
    (news, filter) => {
        const { items, isCache, searchTerm} = news;
        const { oldHits } = findItem(news, searchTerm);
        switch (filter) {
            case filterLists.like:
                return {
                    items:[Object.assign({},items[0],{hits:items[0].hits.filter(item=>item.like)}),...items.slice(1)],
                    isCache,
                    searchTerm,
                    oldHits: oldHits.filter((item) => item.like)
                }
            default:
                return {
                    items,
                    isCache,
                    searchTerm,
                    oldHits
                }
        }
    }
)

const mapState = (state) => {
    return{
        allItems:getAllItems(state)
    }
}

export default connect(mapState, null)(NewsLists);