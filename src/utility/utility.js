const findItem = (state, keyword) => {
    let page,hits,index=0;
    const newState = state.hasOwnProperty('isLoading')?state:state.news;

    while (newState.items[index]&&newState.items[index].keyword!==keyword){
        index++;
    }
    page = newState.items[index]&&newState.items[index].page+1;
    hits = newState.items[index]&&newState.items[index].hits;

    return {
        oldPage:page,
        oldHits:hits,
        oldIndex:index
    };
}

export {findItem}