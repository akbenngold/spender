import React, { useState } from "react";
import Button from "../utilities/Button";
import InputComponent from "../components/InputComponent";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import { IoCloudUpload } from "react-icons/io5";
import { IoCamera } from "react-icons/io5";

function Spend() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
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
            <form action="">
              <InputComponent label="Enter Recipient's Number" phone={true} />
              <InputComponent label="Enter Sender's Nickname" user={true} />
              <div
                style={{ display: "flex", gap: "1rem", alignItems: "center" }}
              >
                {" "}
                <div>
                  <label>
                    <input
                      type="file"
                      accept="image/*"
                      capture="camera"
                      class="camera-input"
                      id="camera"
                      style={{ display: "none" }}
                    />
                    <IoCamera size="12rem" />
                    USE CAMERA
                  </label>
                </div>
                OR
                <div>
                  {" "}
                  <input
                    type="image"
                    src="path_to_image"
                    class="image-input"
                    alt="Image Button"
                    id="upload"
                    style={{ display: "none" }}
                  />
                  <label htmlFor="upload">
                    <IoCloudUpload size="12rem" />
                    BROWSE FILES
                  </label>
                </div>
              </div>
            </form>
            <div
              onClick={nextStep}
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Button label="NEXT" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="withdrawal">
            <div className="balance"></div>
            <form action="">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </form>
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
    }
  }
}

export default Spend;
