import { searchBegin, searchSuccess, searchFail, cacheUse, searchUse} from './actions';

import { findItem} from '../../utility'

function caseSuccess(state,action){
    const { payload } = action;
    const { keyword, hits, page } = payload;

    let keywords = state.keywords.indexOf(keyword) !== -1 ? [...state.keywords] : [keyword, ...state.keywords];
    // more request
    if (page) {
        let {oldHits,oldIndex} = findItem(state, keyword);
        
        let oldItem = state.items[oldIndex];
        let restItems = state.items.filter((item) => state.items.indexOf(item)!==oldIndex);
        
        let items = [{
            ...oldItem,
            hits: [...oldHits, ...hits],
            page
        }, ...restItems];
        
        return Object.assign({},state,{
            items,
            keywords,
            isLoading: false
        })
    }
    // first request
    let items = [{
        keyword,
        hits,
        page
    }, ...state.items];
    return Object.assign({},state,{
        items,
        keywords,
        isLoading: false
    })
}

function requestReducer(state = { items: [], keywords: [], isCache: false,searchTerm:'',isLoading:false},action){
    
    switch(action.type){
        case searchBegin:
            return {...state,isLoading:true}
        case searchSuccess:
            return caseSuccess(state,action);
        case searchFail:
            return { ...state, isLoading: false }
        case cacheUse:
            return { ...state, isCache: true, searchTerm: action.payload.searchTerm}
        case searchUse:
            return {...state,isCache:false}
        default:
            return state;
    }
}

export default requestReducer;