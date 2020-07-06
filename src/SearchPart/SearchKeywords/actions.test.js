import { searchBegin, searchSuccess, searchFail, cacheUse, searchUse } from './actions';
import { beginRequest, successRequest, failRequest, useCache, useSearch, fetchResult } from './actions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { unmountComponentAtNode } from "react-dom";
import regeneratorRuntime from "regenerator-runtime";
import fetch from 'cross-fetch';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('actions',()=>{

    it('return an action with Loading: true',()=>{
        expect(beginRequest()).toEqual({
            type: searchBegin,
            payload: {
                isLoading: true
            }
        })
    });

    it('return an action with Loading: false and failed', () => {
        expect(failRequest()).toEqual({
            type: searchFail,
            payload: {
                isLoading: false
            }
        })
    });
    const result = {
        query:'react',
        hits:[],
        page:0
    };
    it('return an action with Loading: false and succeeded', () => {
        expect(successRequest(result)).toEqual({
            type: searchSuccess,
            payload: {
                keyword: result.query,
                hits: result.hits,
                page: result.page,
                isLoading: false
            }
        })
    });
    const searchTerm = 'react';
    it('return an action to use Cache', () => {
        expect(useCache(searchTerm)).toEqual({
            type: cacheUse,
            payload: {
                isCache: true,
                searchTerm
            }
        })
    });
   
    it('return an action to search things', () => {
        expect(useSearch(searchTerm)).toEqual({
            type: searchUse,
            payload: {
                isCache: false,
            }
        })
    });

    // const fakeNews = {
    //     keyword: 'react',
    //     hits: [],
    //     page: 0,
    // };
    // global.fetch = jest.fn().mockImplementation(()=>
    //     Promise.resolve({
    //         json: () => Promise.resolve(fakeNews)
    //     })
    // );
    // jest.spyOn(global, 'fetch').mockImplementation(() =>
    //     Promise.resolve({
    //         json: () => Promise.resolve(fakeNews)
    //     })
    // );
    // it('should get News and dispatch to store',async ()=>{
    //     const store = mockStore({news:{ items: [], keywords: [], isCache: false, searchTerm: '', isLoading: false }});
    //     return store.dispatch(fetchResult('react'))
    //         .then(()=>{
    //             const actions = store.getActions();
    //             expect(actions[0]).toEqual({ items: [], keywords: [], isCache: false, searchTerm: '', isLoading: true });
    //             expect(actions[1]).toEqual({ items: [], keywords: [], isCache: false, searchTerm: '', isLoading: false });
    //             expect(actions[2]).toEqual({ items: [{ hits: [], page: 0, keyword: 'react' }], keywords: ['react'], isCache: false, searchTerm: 'react', isLoading: false });
    //         });
    // });
    // global.fetch.mockRestore();
    // delete global.fetch;
})