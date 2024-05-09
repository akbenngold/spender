import React, { useState, useEffect } from "react";
import Background from "../components/Background";
import ReactConfetti from "react-confetti";
import naira__100 from "../assets/naira__100.jpg";
import naira__50 from "../assets/naira__50.jpg";
import naira__1000 from "../assets/naira__1000.jpg";
import naira__500 from "../assets/naira__500.jpg";
import naira__200 from "../assets/naira__200.jpg";
import naira__20 from "../assets/naira__20.jpg";

function Receive() {
  const [blur, setBlur] = useState(false);
  const [receive, setReceive] = useState(true);

  const handleBlur = () => {
    setBlur(!blur);
  };

  useEffect(() => {
    let timeout;
    if (receive) {
      timeout = setTimeout(() => {
        setReceive(false);
      }, 5000); // 5 seconds
    }
    return () => clearTimeout(timeout);
  }, [receive]);

  return (
    <div>
      {receive && (
        <>
          <ReactConfetti
            width={window.innerWidth}
            height={window.innerHeight}
          />
          <div className="confetti">
            <img src={naira__100} alt="" />
          </div>
        </>
      )}
      <button
        onClick={() => {
          setReceive(true);
        }}
      >
        CONG
      </button>
      <Background />
      <div className="middle">
        <h2
          className="wallet_balance"
          style={blur ? { filter: "blur(2rem)" } : null}
          onClick={handleBlur}
        >
          NGN XXXX.XX
        </h2>
      </div>
    </div>
  );
}

export default Receive;
