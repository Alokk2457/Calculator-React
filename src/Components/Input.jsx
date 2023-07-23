import { forwardRef } from "react";
import InputStyles from "./Input.styles.ts";

export const InputField = forwardRef((props, ref) => {
  const inputClasses = InputStyles();
  return (
    <input
      className={inputClasses.inputbox}
      name={props.name}
      id={props.id}
      ref={ref}
      type="Number"
      onKeyUp={props.onChange}
    />
  );
});
