import React, { useEffect, useState } from "react";
import Button from "../utilities/Button";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import naira__100 from "../assets/naira__100.jpg";
import naira__50 from "../assets/naira__50.jpg";
import naira__1000 from "../assets/naira__1000.jpg";
import naira__500 from "../assets/naira__500.jpg";
import naira__200 from "../assets/naira__200.jpg";
import naira__20 from "../assets/naira__20.jpg";
import { IoCloudUpload } from "react-icons/io5";
import { IoCamera } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { style } from "./modules";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { UserConsumer } from "../context/UserContext";

function Spend() {
  const [step, setStep] = useState(1);
  const [notePick, setNotePick] = useState({ amount: "", url: "" });
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSwiped, setIsSwiped] = useState(false);
  const [formData, setFormData] = useState({
    recipientNumber: "",
    senderNickname: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleNotePick = (e) => {
    setNotePick({ amount: e.target.alt, url: e.target.src });
  };

  const handleSwipeStart = (event) => {
    const touch = event.touches[0];
    setIsSwiped(false);
    setTouchStart(touch.clientY);
  };

  const handleSwipeMove = (event) => {
    const touch = event.touches[0];
    setTouchEnd(touch.clientY);
  };

  const handleSwipeEnd = (event) => {
    if (touchStart - touchEnd > 50) {
      setIsSwiped(true);
      console.log("Swiped Up!");

      setTimeout(() => {
        setIsSwiped(false);
        console.log("State reset.");
      }, 2000);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any validation here before proceeding to the next step
    console.log(formData);
    nextStep();
  };
  {
    switch (step) {
      case 1:
        return (
          <div className="spend">
            <div className="recents">
              <span>Recents</span>
              <div
                className="img"
                style={{ backgroundImage: `url("${person1}")` }}
              ></div>{" "}
              <div
                className="img"
                style={{ backgroundImage: `url("${person2}")` }}
              ></div>{" "}
              <div
                className="img"
                style={{ backgroundImage: `url("${person3}")` }}
              ></div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input">
                <label htmlFor="recipientNumber">Recipient's Number</label>{" "}
                <input
                  type="tel"
                  id="recipientNumber"
                  name="recipientNumber"
                  className="input-text"
                  value={formData.recipientNumber}
                  onChange={handleChange}
                />
                <FaPhoneAlt
                  size="2rem"
                  color="var(--purple-dark)"
                  style={style}
                />
              </div>
              <div className="input">
                <label htmlFor="senderNickname">Sender's Nickname</label>{" "}
                <input
                  type="text"
                  id="senderNickname"
                  name="senderNickname"
                  className="input-text"
                  value={formData.senderNickname}
                  onChange={handleChange}
                />
                <FaUser size="2rem" color="var(--purple-dark)" style={style} />
              </div>{" "}
              <div>
                <label htmlFor="">Add an Image (Optional)</label>{" "}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    border: "2px dashed var(--purple-light)",
                    background: "white",
                    borderRadius: "0.8rem",
                  }}
                >
                  {" "}
                  <div>
                    <label>
                      <input
                        type="file"
                        accept="image/*"
                        capture="camera"
                        id="camera"
                        style={{ display: "none" }}
                      />
                      <IoCamera size="12rem" color="var(--purple-light)" />
                      USE CAMERA
                    </label>
                  </div>
                  <div> OR</div>
                  <div>
                    {" "}
                    <input
                      type="image"
                      src="path_to_image"
                      alt="Image Button"
                      id="upload"
                      style={{ display: "none" }}
                    />
                    <label htmlFor="upload">
                      <IoCloudUpload size="12rem" color="var(--purple-light)" />
                      BROWSE FILES
                    </label>
                  </div>
                </div>
              </div>{" "}
              <div
                // onClick={nextStep}
                style={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button label="NEXT" type="submit" />
              </div>
            </form>
          </div>
        );
      case 2:
        return (
          <UserConsumer>
            {(userbalance) => {
              return (
                <div className="withdrawal select-notes">
                  <div className="balance">
                    NGN {userbalance}
                    <div
                      style={{ borderLeft: "1px solid black", padding: "1rem" }}
                    >
                      <IoMdAdd />
                    </div>
                  </div>
                  <form
                    action=""
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                    }}
                    className="notes"
                  >
                    <img src={naira__20} alt="20" onClick={handleNotePick} />
                    <img src={naira__50} alt="50" onClick={handleNotePick} />
                    <img src={naira__100} alt="100" onClick={handleNotePick} />
                    <img src={naira__200} alt="200" onClick={handleNotePick} />
                    <img src={naira__500} alt="500" onClick={handleNotePick} />
                    <img
                      src={naira__1000}
                      alt="1000"
                      onClick={handleNotePick}
                    />
                  </form>

                  {notePick.amount && <p>You picked {notePick.amount}</p>}
                  <div className="buttons">
                    {" "}
                    <div onClick={prevStep} className="receive">
                      <Button label="BACK" />
                    </div>
                    <div onClick={nextStep}>
                      <Button label="SPEND" />
                    </div>
                  </div>
                </div>
              );
            }}
          </UserConsumer>
        );
      case 3:
        return (
          <div className="spray">
            <div className="img">
              <div
                onTouchStart={handleSwipeStart}
                onTouchMove={handleSwipeMove}
                onTouchEnd={handleSwipeEnd}
              >
                {" "}
                <img src={notePick.url} alt="" />{" "}
              </div>
            </div>
            {isSwiped ? (
              <motion.div className="img" animate={{ top: "-40rem" }}>
                <div
                  style={{
                    boxShadow: " 0px 0px 50px 50px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {" "}
                  <img src={notePick.url} alt="" />{" "}
                </div>
              </motion.div>
            ) : null}
            <div
              className="balance"
              style={{ position: "absolute", top: "1rem" }}
            >
              NGNXXXX
              <div style={{ borderLeft: "1px solid black", padding: "1rem" }}>
                <IoMdAdd />
              </div>
            </div>
          </div>
        );
    }
  }
}

export default Spend;
