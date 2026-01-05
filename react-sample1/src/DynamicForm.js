import React from "react";
import { useState } from "react";

const DynamicForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleFormData = (event) => {
    setInputValue(event.target.value);
    console.log(`Input value changed to: ${event.target.value}`);
  }

  const handleResetForm = () => {
    setInputValue("");
  }
  return (
    <div>
      <h1>Dynamic Form</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={inputValue}
            onChange={handleFormData}
          />
        </label>
      </form>
      <button onClick={handleResetForm}>Reset</button>
      <p>Your input: {inputValue}</p>
    </div>
  );
};

export default DynamicForm;