// constant



// action type
const searchBegin = 'search/requestBegin';
const searchSuccess = 'search/requestSuccess';
const searchFail = 'search/requestFail';

// actionCreator
const beginRequest = ()=>{

    return({
        type:searchBegin,
        payload:{

        }
    })
}

const successRequest = ()=>{

    return({
        type:searchSuccess,
        payload:{

        }
    })
}

const failRequest = () =>{

    return({
        type:searchFail,
        payload:{

        }
    })
}

export {beginRequest,successRequest,failRequest}