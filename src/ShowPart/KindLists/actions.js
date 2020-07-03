// constant
const filterLists = {
    all:'all',
    like:'like',
    scores:'scores',
    comments:'comments'
}

// action type
const kindChange = 'kind/filter';

// actionCreator
const changeKind = (kind)=>{

    return(
        {
            type:kindChange,
            payload:{
                kind:kind,
                reverse:false
            }
        }
    );
}

export { changeKind, kindChange, filterLists};