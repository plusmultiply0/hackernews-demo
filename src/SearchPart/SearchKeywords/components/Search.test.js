import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { StyleInput, StyleButton, Search } from './Search'
import { find } from 'styled-components/test-utils'


describe('render',()=>{
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

    it('render Search and children right',()=>{
        act(()=>{
            render(<Search/>,container);
        });
        expect(container.querySelector('.search')).toBeTruthy();
        expect(container.querySelector('input')).toBeTruthy();
        expect(container.querySelector('.submit').textContent).toBe('search');
        expect(container.querySelector('.cancel').textContent).toBe('cancel');
        expect(find(container,StyleInput)).toBeTruthy();
        expect(find(container,StyleButton)).toBeTruthy();
    });
})