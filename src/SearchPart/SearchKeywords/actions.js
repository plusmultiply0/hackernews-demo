// import ReduxThunk from 'redux-thunk';
// constant
const baseUrl = 'http://hn.algolia.com/api/v1/';
const searchMode = 'search';
const paramSearch = 'query=';

const paramPage = 'page=';
const paramHpp = 'hitsPerPage=';
const defaultHpp = '50';

const egurl = `${baseUrl}${searchMode}?${paramSearch}${'react'}&${paramPage}${'0'}&${paramHpp}${defaultHpp}`

// action type
const searchBegin = 'search/requestBegin';
const searchSuccess = 'search/requestSuccess';
const searchFail = 'search/requestFail';

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

// 
function fetchResult(){
    return function(dispatch,getState){
        beginRequest();
        fetch(egurl)
        .then(response => response.json())
        .then(result => {console.log(result);successRequest(result);})
        .catch((e)=>{console.log(e);failRequest();});
    }
}

export {beginRequest,successRequest,failRequest}
export { searchBegin, searchSuccess, searchFail}
export {fetchResult}