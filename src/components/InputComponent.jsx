import React from "react";
import Input from "../utilities/Input";

function InputComponent({
  label,
  eye,
  phone,
  message,
  padlock,
  user,
  accNumber,
  bankName,
}) {
  return (
    <div>
      <label htmlFor="input">{label}</label>
      <Input
        eye={eye}
        phone={phone}
        message={message}
        padlock={padlock}
        user={user}
        accNumber={accNumber}
        bankName={bankName}
      />
    </div>
  );
}

export default InputComponent;
