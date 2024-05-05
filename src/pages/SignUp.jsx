import React from "react";
import InputComponent from "../components/InputComponent";
import Button from "../utilities/Button";
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import { Link } from "react-router-dom";
function Signup() {
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
      <form
        action=""
        style={{
          marginTop: "-3rem",
        }}
      >
        <div className="form">
          <InputComponent label="Full Name" user={true} />
          <InputComponent label="Phone Number" phone={true} />
          <InputComponent label="E-mail" message={true} />
          <InputComponent label="4-Digit Passcode" eye={true} padlock={true} />
          <InputComponent label="Confirm Passcode" eye={true} padlock={true} />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button label="SIGN UP" />
        </div>
        <p style={{ textAlign: "center" }}>
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
