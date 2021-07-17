import React from "react";

import classes from "./InputField.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  // label: string;
}

const inputField: React.FC<InputProps> = (props: InputProps) => {
  return (
    <div className={classes.InputFieldWrapper}>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required
      />
    </div>
  );
};

export default inputField;
