import { changeKind, kindChange, filterLists } from './actions'

describe('actions',()=>{
    it('should return an action to change filter to all',()=>{
        expect(changeKind(filterLists.all)).toEqual({
            type: kindChange,
            payload: {
                kind: filterLists.all,
                reverse: false
            }
        });
    });

    it('should return an action to change filter to like', () => {
        expect(changeKind(filterLists.like)).toEqual({
            type: kindChange,
            payload: {
                kind: filterLists.like,
                reverse: false
            }
        });
    });
})