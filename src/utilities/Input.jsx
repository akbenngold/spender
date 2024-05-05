import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { IoMdEye, IoMdEyeOff, IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaLock } from "react-icons/fa";

function Input({ eye, phone, padlock, message, user }) {
  const [view, setView] = useState(false);
  const style = {
    position: "absolute",
    top: "1.25rem",
    left: "1rem",
    opacity: "70%",
  };

  const eyeStyle = {
    position: "absolute",
    top: "1.2rem",
    right: "1rem",
  };

  const handleViewPassword = () => {
    setView((view) => {
      return !view;
    });
  };
  const viewPassword = view ? (
    <IoMdEyeOff
      size="2rem"
      color="var(--purple-dark)"
      style={eyeStyle}
      onClick={handleViewPassword}
    />
  ) : (
    <IoMdEye
      size="2rem"
      color="var(--purple-dark)"
      style={eyeStyle}
      onClick={handleViewPassword}
    />
  );
  return (
    <div className="input">
      {user && <FaUser size="2rem" color="var(--purple-dark)" style={style} />}
      {eye && viewPassword}
      {phone && (
        <FaPhoneAlt size="2rem" color="var(--purple-dark)" style={style} />
      )}
      {padlock && (
        <FaLock size="2rem" color="var(--purple-dark)" style={style} />
      )}
      {message && (
        <IoMdMail size="2rem" color="var(--purple-dark)" style={style} />
      )}
      {padlock && (
        <input type={view ? "text" : "password"} className="input-text" />
      )}
      {user && <input type="text" className="input-text" />}
      {phone && <input type="number" className="input-text" />}
      {message && <input type="email" className="input-text" />}
    </div>
  );
}

export default Input;
