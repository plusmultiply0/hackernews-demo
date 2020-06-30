import React from 'react';
import Kind from './Kind';
// constant
const klists = [
    'type',
    'title',
    'author',
    'comments',
    'created_at',
    'scoces',
    'like'
]

const KindLists = (props)=>{

    return(
        <div className="kind">
            {
                klists.map((item) => <Kind key={item}>{item}</Kind>)
            }
        </div>
    )
}

export default KindLists;