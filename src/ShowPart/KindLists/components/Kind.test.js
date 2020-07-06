import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { find } from 'styled-components/test-utils'
import Kind,{ StyleOption} from './Kind';

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

    it('render Kind right', () => {
        act(() => {
            render(<Kind />, container);
        });
        expect(container.querySelector('.kindlist')).toBeTruthy();
        expect(find(container, StyleOption)).toBeTruthy();
    });
})