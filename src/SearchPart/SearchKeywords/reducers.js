import { searchBegin, searchSuccess, searchFail } from './actions';


function requestReducer(state={items:[],isLoading:false},action){

    const { payload } = action;
    //console.log(action);
    switch(action.type){
        case searchBegin:
            return {...state,isLoading:true}
        case searchSuccess:
            let items=[...state.items,{
                keyword: payload.query,
                hits: payload.hits,
                page: payload.page,
            }];
            return {
                items,
                isLoading:false
            }
        case searchFail:
            return { ...state, isLoading: false }
        default:
            console.log(action);
            return state;
    }
}

export default requestReducer;