import React, { Component } from 'react';
import NewsItem from './NewsItem';
import {connect} from 'react-redux';

class NewsLists extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        
    }
    render() {
        const props = this.props;
        return (
            <div className="newlist">
            {
                props.items.length!==0
                ?props.items[0].hits.map((item)=>{
                    return(
                        <NewsItem author={item.author} 
                                num_comments={item.num_comments}
                                title={item.title}
                                url={item.url}
                                key={item.objectID}
                                kind={item._tags[0]}
                                like={false}
                            />
                    );
                })
                :<div>empty list</div>
            }
            </div>
        );
    }
}

const mapDispatch = {};

const mapState = (state)=>{
    const {items} = state.news;
    return {
        items
    }
}

export default connect(mapState,null)(NewsLists);