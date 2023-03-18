import React from 'react';
import { useState } from 'react';

function addSpaces(inputString) {
    return inputString.replace(/([A-Z])/g, " $1");
}

function Home(props) {
    const [color, setColor] = useState(true)
    const [disabled, setDisabled] = useState(false)

    function clickHandler() {
      setColor(prev => !prev)
    }
    
    return (
        <div className="App">
        <button data-testid="Carl"
            onClick={clickHandler}
            style={{
                backgroundColor:disabled ? "grey" : color ? "MediumVioletRed" : "MidnightBlue",
                cursor: disabled ? "auto" : "pointer"
            }}
            disabled={disabled}
        >
            Change to{color ? addSpaces("MidnightBlue"): addSpaces("MediumVioletRed")}
        </button>
        <label htmlFor="myCheckbox">Disable Button</label>
        <input
            type="checkbox"
            id="myCheckbox"
            onChange={() => setDisabled(prev => !prev)}
        />
    </div>

    );
}

export default Home;