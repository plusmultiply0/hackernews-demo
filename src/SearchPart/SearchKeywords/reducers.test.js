import newsReducer from './reducers';
import { searchBegin, searchSuccess, searchFail, cacheUse, searchUse } from './actions';
import { itemDelete, itemLike } from '../../ShowPart';

describe('news Reducer',()=>{
    const state = { items: [], keywords: [], isCache: false, searchTerm: '', isLoading: false };
    it('should return initial state',()=>{
        expect(newsReducer(state,{})).toEqual({ items: [], keywords: [], isCache: false, searchTerm: '', isLoading: false });
    });

    it('should handle searchBegin',()=>{
        expect(newsReducer(state,{
            type: searchBegin,
            payload: {
                isLoading: true
            }
        })).toEqual({ items: [], keywords: [], isCache: false, searchTerm: '', isLoading: true });
    });

    const result = {query:'react',hits:[],page:0};
    it('should handle searchSuccess',()=>{
        expect(newsReducer(state,{
            type: searchSuccess,
            payload: {
                keyword: result.query,
                hits: result.hits,
                page: result.page,
                isLoading: false
            }
        })).toEqual({ items: [{hits:[],page:0,keyword:'react'}], keywords: ['react'], isCache: false, searchTerm: 'react', isLoading: false });
    });

    it('should handle searchFail',()=>{
        expect(newsReducer(state,{
            type: searchFail,
            payload: {
                isLoading: false
            }
        })).toEqual({ items: [], keywords: [], isCache: false, searchTerm: '', isLoading: false });
    });

    const searchTerm='react';
    it('should handle cacheUse',()=>{
        expect(newsReducer(state,{
            type: cacheUse,
            payload: {
                isCache: true,
                searchTerm
            }
        })).toEqual({ items: [], keywords: [], isCache: true, searchTerm: 'react', isLoading: false });
    });

    it('should handle searchUse',()=>{
        expect(newsReducer(state,{
            type: searchUse,
            payload: {
                isCache: false,
            }
        })).toEqual({ items: [], keywords: [], isCache: false, searchTerm: '', isLoading: false });
    });

    const id ='1551';
    it('should handle itemLike',()=>{
        expect(newsReducer(state,{
            type: itemLike,
            payload: {
                id
            }
        })).toEqual({ items: [], keywords: [], isCache: false, searchTerm: '', isLoading: false });
    });

    it('should handle itemDelete', () => {
        expect(newsReducer(state,{
            type: itemDelete,
            payload: {
                id
            }
        })).toEqual({ items: [], keywords: [], isCache: false, searchTerm: '', isLoading: false });
    });
})