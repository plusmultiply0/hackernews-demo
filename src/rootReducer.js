import { combineReducers } from 'redux'
import {requestReducer} from './SearchPart';

const rootReducer = combineReducers({
    items: requestReducer
});

export default rootReducer;