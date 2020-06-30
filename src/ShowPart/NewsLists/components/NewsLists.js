import React, { Component } from 'react';
import NewsItem from './NewsItem';
import { connect } from 'react-redux';
import { findItem } from '../../../utility';

class NewsLists extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    // componentDidMount(){
    //     fetchResult('programmer');
    // }


    render() {
        const props = this.props;
        return (
            <div className="newlist">
                {
                    props.items.length !== 0
                        ?
                        (!props.isCache ?
                            props.items[0].hits.map((item) => {
                                return (
                                    <NewsItem author={item.author}
                                        num_comments={item.num_comments}
                                        title={item.title}
                                        url={item.url}
                                        key={item.objectID}
                                        kind={item._tags[0]}
                                        like={false}
                                        itemID={item.objectID}
                                        points={item.points}
                                        created={item.created_at}
                                    />
                                );
                            })
                            : props.oldHits.map((item) => {
                                return (
                                    <NewsItem author={item.author}
                                        num_comments={item.num_comments}
                                        title={item.title}
                                        url={item.url}
                                        key={item.objectID}
                                        kind={item._tags[0]}
                                        like={item.like}
                                        itemID={item.objectID}
                                        points={item.points}
                                        created={item.created_at}
                                    />);
                            }))
                        : <div>empty list</div>
                }
            </div>
        );
    }
}

const mapDispatch = {};

const mapState = (state) => {
    const { items, isCache, searchTerm } = state.news;
    const { oldHits } = findItem(state, searchTerm)
    return {
        items,
        isCache,
        searchTerm,
        oldHits
    }
}

export default connect(mapState, null)(NewsLists);