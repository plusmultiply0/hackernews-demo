import { kindChange} from './actions';

function filterReducer(state='',action){

    switch(action.type){
        case kindChange:
            return action.payload.kind
        default:
            return state;
    }
}

export default filterReducer;