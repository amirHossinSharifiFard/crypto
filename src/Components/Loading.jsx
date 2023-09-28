import React from 'react';

import spinner from "../gif/spinner.gif"
const Loading = () => {
    return (
        <>
            <img src={spinner} alt='loading' />
            <p>LOADING ...</p>
        </>
    );
};

export default Loading;