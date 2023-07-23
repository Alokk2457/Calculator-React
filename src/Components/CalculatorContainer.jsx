import React, { useRef, useState } from "react";
import { InputField } from "./Input";
import { Button } from "./Button";
import styles from "./CalculatorContainer.styles.ts";

const buttons = [
  { Name: "Add" },
  { Name: "Subtract" },
  { Name: "Multiply" },
  { Name: "Divide" },
];

export const CalculatorContainer = (props) => {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const [actionValue, actionValueUpdater] = useState("");
  const calculatorStyles = styles();
  const buttonClickHandler = (clickEvent) => {
    const action = clickEvent.target.value;
    let valuee;
    const value1 = +input1Ref.current.value;
    const value2 = +input2Ref.current.value;
    switch (action) {
      case "Add":
        valuee = value1 + value2;
        break;
      case "Subtract":
        if (value1 >= value2) {
          valuee = value1 - value2;
        } else valuee = value2 - value1;
        break;
      case "Multipy":
        valuee = value1 * value2;
        break;
      case "Divide":
        valuee = value1 / value2;
        break;
      default:
        valuee = null;
    }

    actionValueUpdater(valuee);
  };

  const numericValueValidator = (fieldEvent) => {
    const field = fieldEvent.target.name;
    if (field === "input1Ref") {
      const number = +input1Ref.current.value;
      if (number < 1) {
        input1Ref.current.value = "";
      }
    } else {
      const number = +input2Ref.current.value;
      if (number < 1) {
        input2Ref.current.value = "";
      }
    }
  };

  return (
    <div className={calculatorStyles.container}>
      <h1 className={calculatorStyles.h1}> Calculator </h1>
      <div className={calculatorStyles.innerDiv}>
        <InputField
          ref={input1Ref}
          name="input1Ref"
          id="input1Ref"
          onChange={numericValueValidator}
        />
        <InputField
          ref={input2Ref}
          name="input2Ref"
          id="input2Ref"
          onChange={numericValueValidator}
        />
      </div>
      <div>
        {buttons.map((button) => {
          return (
            <Button
              key={button.Name}
              onClickHandler={buttonClickHandler}
              value={button.Name}
            >
              {button.Name}
            </Button>
          );
        })}
      </div>

      <h2
        className={`${
          actionValue ? calculatorStyles.success : calculatorStyles.failure
        }`}
      >
        {actionValue ? "Action value is: " + actionValue : "Invalid!!"}
      </h2>
    </div>
  );
};
