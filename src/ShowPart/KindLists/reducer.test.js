import filterReducer from './reducer';
import { kindChange,filterLists} from './actions';

describe('actions', () => {
    const state = 'all';
    it('should return an action to change filter to all', () => {
        expect(filterReducer(state, {
            type: kindChange,
            payload: {
                kind: filterLists.all,
                reverse: false
            }
        })).toEqual(filterLists.all)
    });

    it('should return an action to change filter to like', () => {
        expect(filterReducer(state, {
            type: kindChange,
            payload: {
                kind: filterLists.like,
                reverse: false
            }
        })).toEqual(filterLists.like)
    });
})