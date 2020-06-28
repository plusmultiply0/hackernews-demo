import { searchBegin, searchSuccess, searchFail, cacheUse, searchUse} from './actions';
import { itemDelete, itemLike } from '../../ShowPart';
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
            isLoading: false,
            searchTerm:keyword
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
        isLoading: false,
        searchTerm: keyword
    })
}

function caseDelete(state,action){
    const {items,searchTerm} = state;
    console.log(items);
    let item = items.filter((item)=>item.keyword===searchTerm)[0];
    let restItems = items.filter((item) => item.keyword !== searchTerm);
    let newHits = item.hits.filter((item) => item.objectID !== action.payload.id);
    
    return Object.assign({},state,{items:[Object.assign({},item,{hits:newHits}),...restItems]})
}

function caseLike(state,action){
    const { items, searchTerm } = state;
    console.log(items);
    let item = items.filter((item) => item.keyword === searchTerm)[0];
    let restItems = items.filter((item) => item.keyword !== searchTerm);
    let newHits = item.hits.map((item)=>{
        if (item.objectID === action.payload.id){
            let returnV = item.hasOwnProperty('like') ? { ...item, like: !item.like } : { ...item, like: true };
            return returnV;
        }
        return item;
    })

    return Object.assign({}, state, { items: [Object.assign({}, item, { hits: newHits }),...restItems] })
}

function requestReducer(state = { items: [], keywords: [], isCache: false,searchTerm:'',isLoading:false},action){
    
    switch(action.type){
        case searchBegin:
            return {...state,isLoading:true}
        case searchSuccess:
            return caseSuccess(state,action);
        case searchFail:
            return { ...state, isLoading: false }
        //    
        case cacheUse:
            return { ...state, isCache: true, searchTerm: action.payload.searchTerm}
        case searchUse:
            return {...state,isCache:false}
        // 
        case itemLike:
            return caseLike(state, action);
        case itemDelete:
            return caseDelete(state, action);
        default:
            return state;
    }
}

export default requestReducer;