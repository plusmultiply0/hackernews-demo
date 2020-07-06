import { findItem } from './utility'

describe('utility check',()=>{

    it('can return object with right item',()=>{
        const testState = {
            items:[{keyword:"react",hits:[],page:0}],
            keywords:[],
            isLoading:false
        }
        expect(findItem(testState, 'react')).toEqual({
            oldPage: 0,
            oldHits: [],
            oldIndex: 0
        })
    })
    
})