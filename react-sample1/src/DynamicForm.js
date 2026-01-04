import React from "react";

const DynamicForm = () => {
    const [formData, setFormData] = React.useState({
        message: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleInputChange = (event) => {
        handleChange(event);
    };

    const handleReset = () => {
        setFormData({ message: "" });
    };

    return (
    <div>
      <h1>Dynamic Form</h1>
      <input
        type="text"
        value={formData.message}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <button onClick={handleReset}>Reset</button>
      <div>
        <h2>Current Input:</h2>
        <p>{formData.message}</p>
      </div>
    </div>
    );

}

export default DynamicForm;