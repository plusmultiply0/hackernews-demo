import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { Loading, StyleLoading, NewsLists, getAllItems } from './NewsLists';

import { find } from 'styled-components/test-utils'

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

describe('components',()=>{
    it('should render text Loading', () => {
        act(() => {
            render(<Loading />, container);
        })
        // expect(container.querySelector(".loading").textContent).toContain('Loading...');
        expect(find(container, StyleLoading)).toBeTruthy();
    });

    it('should render NewsLists', () => {
        act(() => {
            render(<NewsLists allItems={{items: [], isCache: false, oldHits: []}}/>, container);
        })
        expect(container.querySelector('.newlist')).toBeTruthy();
    });
})
