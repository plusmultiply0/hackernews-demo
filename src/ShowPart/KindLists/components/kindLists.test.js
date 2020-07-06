import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { find } from 'styled-components/test-utils'
import { StyleDiv, StyleLabel, StyleButton, StyleSelect, KindLists } from './kindLists'

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

    it('render KindLists right', () => {
        act(() => {
            render(<KindLists />, container);
        });
        expect(container.querySelector('.filter')).toBeTruthy();
        expect(find(container, StyleDiv)).toBeTruthy();
        expect(find(container, StyleLabel)).toBeTruthy();
        expect(find(container, StyleButton)).toBeTruthy();
        expect(find(container, StyleSelect)).toBeTruthy();
    });
})