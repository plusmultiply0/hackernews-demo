const findItem = (state, keyword) => {
    let page,hits,index=0;
    const newState = state.hasOwnProperty('isLoading')?state:state.news;

    while (newState.items[index] && newState.items[index].keyword!==keyword){
        index++;
    }
    let tmpItem = newState.items[index];
    page = tmpItem&&tmpItem.page;
    hits = tmpItem&&tmpItem.hits;

    return {
        oldPage:page,
        oldHits:hits,
        oldIndex:index
    };
}

export {findItem}