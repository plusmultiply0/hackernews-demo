import { combineReducers } from 'redux'
import {requestReducer} from './SearchPart';
import { filterReducer } from './ShowPart';
const rootReducer = combineReducers({
    news: requestReducer,
    filter: filterReducer
});

export default rootReducer;