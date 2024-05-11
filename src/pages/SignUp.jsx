import React, { useState } from "react";

import Button from "../utilities/Button";
import { Link } from "react-router-dom";
import { divStyle, formStyle, style, eyeStyle } from "./modules";
import { IoMdEye, IoMdEyeOff, IoMdMail } from "react-icons/io";
import { FaLock, FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

function Signup() {
  const [view, setView] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    userId: "",
    email: "",
    passcode: "",
    confirmPasscode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleViewPassword = () => {
    setView((view) => !view);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log(formData);
  };
  return (
    <div className="signin">
      <h2
        style={{
          marginTop: "-3rem",
        }}
      >
        Become a
        <br /> Big Spender!
      </h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div className="form">
          <div className="input">
            <label htmlFor="fullName">Full Name</label>{" "}
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="input-text"
              value={formData.fullName}
              onChange={handleChange}
            />
            <FaUser size="2rem" color="var(--purple-dark)" style={style} />
          </div>{" "}
          <div className="input">
            <label htmlFor="userId">Phone Number</label>{" "}
            <input
              type="tel"
              id="userId"
              name="userId"
              className="input-text"
              value={formData.userId}
              onChange={handleChange}
            />
            <FaPhoneAlt size="2rem" color="var(--purple-dark)" style={style} />
          </div>{" "}
          <div className="input">
            <label htmlFor="email">E-mail</label>{" "}
            <input
              type="email"
              className="input-text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <IoMdMail size="2rem" color="var(--purple-dark)" style={style} />
          </div>
          <div className="input">
            <label htmlFor="passcode">4-Digit Passcode</label>
            <input
              type={view ? "text" : "password"}
              className="input-text"
              name="passcode"
              id="passcode"
              value={formData.passcode}
              onChange={handleChange}
            />
            {viewPassword}
            <FaLock size="2rem" color="var(--purple-dark)" style={style} />{" "}
          </div>
          <div className="input">
            <label htmlFor="confirmPasscode">Confirm Passcode</label>
            <input
              type={view ? "text" : "password"}
              className="input-text"
              name="confirmPasscode"
              id="confirmPasscode"
              value={formData.confirmPasscode}
              onChange={handleChange}
            />
            {viewPassword}
            <FaLock size="2rem" color="var(--purple-dark)" style={style} />{" "}
          </div>
        </div>

        <div style={divStyle}>
          <Button label="SIGN UP" type="submit" />
        </div>
        <p style={{ textAlign: "center", marginTop: "-2rem" }}>
          Already have an account?{" "}
          <Link to="/signin">
            <span>Sign in </span>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
