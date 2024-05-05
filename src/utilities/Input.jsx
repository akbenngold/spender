import React from "react";
import { FaUser } from "react-icons/fa6";
import { IoMdEye, IoMdEyeOff, IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaLock } from "react-icons/fa";

function Input({ eye, phone, key, message, user }) {
  const style = {
    position: "absolute",
    top: "1.2rem",
    left: "1rem",
  };

  const eyeStyle = {
    position: "absolute",
    top: "1.2rem",
    right: "1rem",
  };
  return (
    <div className="input">
      {user && <FaUser size="2rem" color="var(--purple-dark)" style={style} />}
      {eye && (
        <IoMdEye size="2rem" color="var(--purple-dark)" style={eyeStyle} />
      )}
      {phone && (
        <FaPhoneAlt size="2rem" color="var(--purple-dark)" style={style} />
      )}
      {key && <FaLock size="2rem" color="var(--purple-dark)" style={style} />}
      {message && (
        <IoMdMail size="2rem" color="var(--purple-dark)" style={style} />
      )}
      <input type="text" className="input-text" />
    </div>
  );
}

export default Input;
