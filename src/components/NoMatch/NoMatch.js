import React from 'react';

const NoMatch = () => {
    const divStyle = {
        // border: '5px solid black',
        margin:'5px',
        borderRadius:'10px',
        padding:'25px',
        textAlign:'center',
        marginTop:'250px',
        fontSize:'800px',
        
    }
    return (
        <div style={divStyle}>
            <h1> 404 Not Found</h1>
        </div>
    );
};

export default NoMatch;