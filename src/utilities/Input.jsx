import React from "react";
import { FaUser } from "react-icons/fa6";

function Input() {
  return (
    <div className="input">
      <FaUser size="2rem" color="var(--purple-dark)" />
      <input type="text" className="input-text" />
    </div>
  );
}

export default Input;
