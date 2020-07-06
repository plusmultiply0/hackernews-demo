import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// style
const StyleOption = styled.option` 
    color:hsla(0, 9%, 6%, 0.83);
`;

// 
const Kind = (props) => {
    return (
        <StyleOption className="kindlist" value={props.children}>
                {props.children}
        </StyleOption>
    );
}

Kind.propTypes = {
    children:PropTypes.string
}
export default Kind;
export { StyleOption}