import React from 'react';

const Kind = (props) => {

    return (
        <div className="kindlist">
            <div>{props.children}</div>
        </div>
    );
}

export default Kind;