import React from "react";
import { IoIosSend } from "react-icons/io";
import { MdCallReceived } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { PiHandWithdraw } from "react-icons/pi";
import { IoMdAdd } from "react-icons/io";

function Button({ label }) {
  return (
    <button>
      {label == "SPEND" && <IoIosSend size="2rem" />}
      {label == "RECEIVE" && <MdCallReceived size="2rem" />}
      {label == "LOG OUT" && <RiLogoutCircleRLine size="2rem" />}{" "}
      {label == "WITHDRAWAL" && <PiHandWithdraw size="2rem" />}{" "}
      {label == "TOP UP" && <IoMdAdd size="2rem" />}
      {label}
    </button>
  );
}

export default Button;
