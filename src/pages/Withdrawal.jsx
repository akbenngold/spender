import React from "react";
import Button from "../utilities/Button";
import InputComponent from "../components/InputComponent";

function Withdrawal() {
  return (
    <div className="withdraw backdrop">
      <div className="withdrawal">
        <Button label="WITHDRAWAL" disabled={true} />
      </div>
      <form action="">
        <InputComponent label="Account Number" accNumber={true} />
        <InputComponent label="Bank Name" bankName={true} />
        <InputComponent label="Account Holder's Name" user={true} />
        <div className="withdrawal-2">
          <Button label="WITHDRAW" />
        </div>
      </form>
    </div>
  );
}

export default Withdrawal;
