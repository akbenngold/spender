import React, { useState } from "react";
import InputComponent from "../components/InputComponent";
import { eyeStyle, style, pStyle } from "./modules";
import Button from "../utilities/Button";
import { IoMdEye, IoMdEyeOff, IoMdRadioButtonOff } from "react-icons/io";
import { IoMdRadioButtonOn } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";

function SignIn() {
  const [remember, setRemember] = useState(true);
  const [view, setView] = useState(false);
  const [formData, setFormData] = useState({
    userId: "",
    passcode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Implement form submission logic here
  };

  const handleRemember = () => {
    setRemember((remember) => !remember);
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

  return (
    <div className="signin">
      <h2>
        Welcome,
        <br /> Big Spender!
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form">
          {/* username */}
          <div className="input">
            <label htmlFor="userId">User ID</label>{" "}
            <input
              type="number"
              id="userId"
              name="userId"
              className="input-text"
              value={formData.userId}
              onChange={handleChange}
            />
            <FaPhoneAlt size="2rem" color="var(--purple-dark)" style={style} />
          </div>

          {/* password */}
          <div className="input">
            <label htmlFor="passcode">Passcode</label>
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
        </div>
        <div className="password-options">
          <div className="flex" onClick={handleRemember}>
            {remember ? (
              <IoMdRadioButtonOn color="var(--blue)" size="2.4rem" />
            ) : (
              <IoMdRadioButtonOff color="var(--blue)" size="2.4rem" />
            )}
            <p
              style={{
                color: "var(--black)",
              }}
            >
              Remember me
            </p>
          </div>
          <p style={pStyle}>Forgot password?</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button type="submit" label="SIGN IN" />
        </div>
        <p style={{ textAlign: "center" }}>
          Don't have an account?{" "}
          <Link to="/signup">
            <span>Sign up </span>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
