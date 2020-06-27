import { combineReducers } from 'redux'
import {requestReducer} from './SearchPart';

const rootReducer = combineReducers({
    news: requestReducer
});

export default rootReducer;