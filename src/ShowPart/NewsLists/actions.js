// action type
const itemDelete = 'news/deleteItem';
const itemLike = 'news/likeItem';

// action creator
const deleteItem = (id)=>{

    return({
        type:itemDelete,
        payload:{
            id
        }
    })
}

const likeItem = (id)=>{

    return({
        type:itemLike,
        payload:{
            id
        }
    })
}

export {deleteItem,likeItem}