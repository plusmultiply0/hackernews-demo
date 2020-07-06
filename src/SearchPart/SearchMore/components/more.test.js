import { SearchMore, StyleButton} from './more';
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { find } from 'styled-components/test-utils'


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

    it('render Search and children right', () => {
        act(() => {
            render(<SearchMore />, container);
        });
        expect(container.querySelector('.more')).toBeTruthy();
        expect(find(container, StyleButton)).toBeTruthy();
    });
})
