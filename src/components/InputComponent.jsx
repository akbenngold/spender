import React from "react";
import Input from "../utilities/Input";

function InputComponent({ label, eye, phone, message, key, user }) {
  return (
    <div>
      <label htmlFor="input">{label}</label>
      <Input eye={eye} phone={phone} message={message} key={key} user={user} />
    </div>
  );
}

export default InputComponent;
