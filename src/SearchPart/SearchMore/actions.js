// constant


// action type
const moreRequest = 'news/moreRequestBegin';
const moreRequestSuccess = 'news/moreRequestSuccess';
const moreRequestFail = 'news/moreRequestFail';

// actionCreator
const requestMore = ()=>{

    return({
        type:moreRequest,
        payload:{

        }
    })
}

const requestMoreSuccess = ()=>{

    return({
        type: moreRequestSuccess,
        payload:{

        }
    })
}

const requestMoreFail = ()=>{

    return({
        type:moreRequestFail,
        payload:{

        }
    })
}

export {requestMore,requestMoreSuccess,requestMoreFail}