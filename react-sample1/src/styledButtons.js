import React from 'react';

const StyledButtons = () => {
    const isDisabled = false;
    const buttonStyle = {
        backgroundColor: isDisabled ? 'gray' : 'blue',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        margin: 'auto',
        textAlign: 'center',
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    };

    return (
        <div style={containerStyle}>
            <button className="button0" disabled={isDisabled} style={buttonStyle} value = "Click Me">Click Me</button>
        </div>
    );
}

export default StyledButtons;