import React from 'react';
import NewsLists from './NewsLists';
import KindLists from './KindLists';

const NewsTable = (props)=>{
    
        return(
            <div className="newstable">
                <KindLists/>
                <NewsLists/>
            </div>
        );
    }

export default NewsTable;