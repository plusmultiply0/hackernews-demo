import { kindChange} from './actions';

function filterReducer(state='all',action){

    switch(action.type){
        case kindChange:
            return action.payload.kind
        default:
            return state;
    }
}

export default filterReducer;