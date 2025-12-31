import React from 'react';

const StyledButtons = () => {
    const isDisabled = false;
    const buttonStyle = {
        backgroundColor: isDisabled ? 'gray' : 'blue',
        color: 'white',
    };

    return (
        <div>
            <button className="button0" disabled={isDisabled} style={buttonStyle} value = "Click Me">Click Me</button>
        </div>
    );
}

export default StyledButtons;