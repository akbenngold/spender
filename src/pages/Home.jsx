import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontSize: "5rem",
        gap: "3rem",
      }}
    >
      <Link to="/signin">Sign in</Link>
      <Link to="/signup">Sign up</Link>
      <Link to="/wallet">Wallet</Link>
      <Link to="/receive">Receive</Link>
      <Link to="/spend">Spend</Link>
    </div>
  );
}

export default Home;
