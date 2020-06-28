import React from 'react';
import NewsLists from './NewsLists';
import KindLists from './KindLists';
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
export { itemDelete, itemLike }