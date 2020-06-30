
// constant
const baseUrl = 'http://hn.algolia.com/api/v1/';
const searchMode = 'search';
// const searchMode = 'search_by_date'
const paramSearch = 'query=';

const paramPage = 'page=';
const paramHpp = 'hitsPerPage=';
const defaultHpp = '50';

// action type
const searchBegin = 'search/requestBegin';
const searchSuccess = 'search/requestSuccess';
const searchFail = 'search/requestFail';

const cacheUse = 'search/useCache';
const searchUse = 'search/useSearch';

// actionCreator
const beginRequest = ()=>{

    return({
        type:searchBegin,
        payload:{
            isLoading:true
        }
    })
}

const successRequest = (result)=>{

    return({
        type:searchSuccess,
        payload:{
            keyword:result.query,
            hits:result.hits,
            page:result.page,
            isLoading:false
        }
    })
}

const failRequest = () =>{

    return({
        type:searchFail,
        payload:{
            isLoading: false
        }
    })
}

const useCache = (searchTerm)=>{
    return({
        type:cacheUse,
        payload:{
            isCache:true,
            searchTerm
        }
    })
}

const useSearch = ()=>{
    return({
        type:searchUse,
        payload:{
            isCache:false,
        }
    })
}


// 
function fetchResult(searchTrem,page=0){
    return function(dispatch,getState){
        const egurl = `${baseUrl}${searchMode}?${paramSearch}${searchTrem}&${paramPage}${page}&${paramHpp}${defaultHpp}`
        // cache
        const { keywords } = getState().news;
        console.log(keywords)
        console.log(keywords&&keywords.indexOf(searchTrem));
        if (keywords&&keywords.indexOf(searchTrem)!==-1&&page===0){
            dispatch(useCache(searchTrem));
            return;
        }
        // new
        dispatch(beginRequest());
        fetch(egurl)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            dispatch(useSearch());
            dispatch(successRequest(result));
        })
        .catch((e)=>{console.log(e);dispatch(failRequest());});
    }
}

export {beginRequest,successRequest,failRequest}
export { searchBegin, searchSuccess, searchFail,cacheUse,searchUse}
export {fetchResult}