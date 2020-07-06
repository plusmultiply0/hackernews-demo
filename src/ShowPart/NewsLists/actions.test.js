import { deleteItem, likeItem, itemDelete, itemLike } from './actions';

describe('actions',()=>{
    const testId = '1551';
    it('should return an action to like an item',()=>{
        expect(likeItem(testId)).toEqual({
            type: itemLike,
            payload: {
                id:testId
            }
        })
    })
    it('should return an action to delete an item', () => {
        expect(deleteItem(testId)).toEqual({
            type: itemDelete,
            payload: {
                id:testId
            }
        })
    })
})