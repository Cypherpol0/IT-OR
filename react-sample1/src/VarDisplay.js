import React from "react";

function VarDisplay() {
  let stringVar = "Hello, World!";
  let numberVar = 42;
  let boolVar = true;
  let arrayVar = [1, 2, 3, 4, 5];
  let objectVar = {name: "Alice Johnson", age: 28, occupation: "Data Scientist"};


    if (Math.random() > 0.5) {
  stringVar = "Hello cruel World!";
    }

    return (
    <div>
      <h2>{stringVar}</h2>
      <p>{numberVar} is an example of a number</p>
      <p>{boolVar ? "This is true!" : "This is false!"}</p>
      <p>Elements in a random array: {arrayVar.join(", ")}</p>
      <p>Some random info about Alice: {objectVar.name}, {objectVar.age}, {objectVar.occupation}</p>
    </div>
  );
}

export default VarDisplay;
