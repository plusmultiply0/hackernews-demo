import { searchBegin, searchSuccess, searchFail } from './actions';


function requestReducer(state={},action){

    const { payload } = action;

    switch(action.type){
        case searchBegin:
            return {...state,isLoading:true}
        case searchSuccess:
            return {...Object.assign({},...state,{
                keyword: payload.query,
                hits: payload.hits,
                page:payload.page,
            }),isLoading:false}
        case searchFail:
            return { ...state, isLoading: false }
        default:
            return state;
    }
}

export default requestReducer;