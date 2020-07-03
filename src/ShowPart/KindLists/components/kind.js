import React from 'react';
import PropTypes from 'prop-types';

const Kind = (props) => {

    return (
            <option className="kindlist" value={props.children}>
                {props.children}
            </option>
    );
}

Kind.propTypes = {
    children:PropTypes.string
}
export default Kind;