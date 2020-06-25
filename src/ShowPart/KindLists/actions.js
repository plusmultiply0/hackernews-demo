// action type
const kindChangeOrReverse = 'kind/changeOrReverse';

// constant--根据API来
const allKinds = {
    author:'author'
}

// actionCreator
const changeKind = (kind)=>{

    return(
        {
            type:kindChangeOrReverse,
            payload:{
                kind:kind,
                reverse:false
            }
        }
    );
}

export {changeKind,allKinds,kindChangeOrReverse};