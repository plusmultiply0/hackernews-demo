import React from 'react';
import NewsLists from './NewsLists';
import KindLists, { filterReducer, filterLists} from './KindLists';
import { itemDelete, itemLike } from './NewsLists'

const NewsTable = (props)=>{
    
        return(
            <div className="newstable">
                <KindLists/>
                <NewsLists/>
            </div>
        );
    }

export default NewsTable;
export { itemDelete, itemLike, filterReducer, filterLists }