import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { find } from 'styled-components/test-utils'

import { StyleSpan, StyleScore, StyleTitle, StyleItem, NewsItem } from './NewsItem';

describe('render', () => {
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

    it('render NewsItem and children right', () => {
        act(() => {
            render(<NewsItem />, container);
        });
        expect(container.querySelector('.newsitem')).toBeTruthy();
        expect(container.querySelector('.item')).toBeTruthy();
        expect(container.querySelector('.like')).toBeTruthy();
        expect(container.querySelector('.delete')).toBeTruthy();
        expect(find(container, StyleSpan)).toBeTruthy();
        expect(find(container, StyleScore)).toBeTruthy();
        expect(find(container, StyleTitle)).toBeTruthy();
        expect(find(container, StyleItem)).toBeTruthy();
    });
})