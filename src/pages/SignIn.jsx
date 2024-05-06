import React, { useState } from "react";
import InputComponent from "../components/InputComponent";
import Button from "../utilities/Button";
import { IoMdRadioButtonOff } from "react-icons/io";
import { IoMdRadioButtonOn } from "react-icons/io";
import { Link } from "react-router-dom";

function SignIn() {
  const [remember, setRemember] = useState(false);
  const [view, setView] = useState(false);

  const handleRemember = () => {
    setRemember((remember) => {
      return !remember;
    });
  };

  return (
    <div className="signin">
      <h2>
        Welcome,
        <br /> Big Spender!
      </h2>
      <form action="">
        <div className="form">
          <InputComponent label="User ID" phone={true} />
          <InputComponent
            label="Passcode"
            eye={true}
            padlock={true}
            eyeLock={view}
          />
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
          <p style={{ color: "var(--purple-dark)", opacity: "50%" }}>
            Forgot password?
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/wallet">
            <Button label="SIGN IN" />
          </Link>
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
