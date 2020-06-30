import React from 'react';

const Kind = (props) => {

    return (
            <option className="kindlist" value={props.children}>
                {props.children}
            </option>
    );
}

export default Kind;