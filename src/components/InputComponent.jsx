import React from "react";
import Input from "../utilities/Input";

function InputComponent({ label, eye, phone, message, key }) {
  return (
    <div>
      <label htmlFor="input">{label}</label>
      <Input eye={eye} phone={phone} />
    </div>
  );
}

export default InputComponent;
