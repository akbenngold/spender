import React from "react";
import { FaUser } from "react-icons/fa6";
import { IoMdEye, IoMdEyeOff, IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaLock } from "react-icons/fa";

function Input({ eye, phone, key, message, user }) {
  return (
    <div className="input">
      {user && <FaUser size="2rem" color="var(--purple-dark)" />}
      {eye && <IoMdEye size="2rem" color="var(--purple-dark)" />}
      {phone && <FaPhoneAlt size="2rem" color="var(--purple-dark)" />}
      {key && <FaLock size="2rem" color="var(--purple-dark)" />}
      {message && <IoMdMail size="2rem" color="var(--purple-dark)" />}
      <input type="text" className="input-text" />
    </div>
  );
}

export default Input;
