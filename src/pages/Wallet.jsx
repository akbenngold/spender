import React, { useState } from "react";
import Background from "../components/Background";
import Button from "../utilities/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

function Wallet() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="wallet">
      <Background />
      {menuOpen && <div className="backdrop" onClick={handleMenuClick}></div>}
      {menuOpen ? (
        <IoIosClose
          size="5rem"
          style={{
            position: "absolute",
            top: "-5rem",
            right: "0",
            transition: "0.3s",
            zIndex: "500",
          }}
          onClick={handleMenuClick}
        />
      ) : (
        <RxHamburgerMenu
          size="4rem"
          style={{
            position: "absolute",
            top: "-4rem",
            right: "0",
            transition: "0.3s",
          }}
          onClick={handleMenuClick}
        />
      )}

      {menuOpen && (
        <div className="menu">
          <div className="withdrawal">
            <Link to="/withdrawal">
              {" "}
              <Button label="WITHDRAWAL" />
            </Link>
          </div>
          <div className="top-up">
            <Link to="/topup">
              <Button label="TOP UP" />
            </Link>
          </div>
          <div className="log-out">
            {" "}
            <Link to="/signin">
              {" "}
              <Button label="LOG OUT" />
            </Link>
          </div>
        </div>
      )}

      <h2 className="wallet_label">Wallet Balance</h2>
      <h2 className="wallet_balance">NGN XXXX.XX</h2>

      <div className="buttons">
        <Link to="/spend">
          {" "}
          <Button label="SPEND" />
        </Link>
        <div className="receive">
          <Link to="/receive">
            {" "}
            <Button label="RECEIVE" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
