import React from "react";
import image from "../../images/background.jpg";
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";
import { Data } from "./Data";
import { ImageData } from "./ImageData";

export const Home = () => {
  const { keyframes, timing } = bounce;
  const { ref } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 1000, // Delay 1s
      duration: 3000,
      iterations: Infinity,
    },
  });
  const goDown = () => {
    window.scrollBy(0, 700);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <Data />
          </div>
          <div className="col-md">
            <ImageData image={image} />
          </div>
        </div>
        <br />
        <br />
        <div className="row justify-content-lg-center text-center">
          <div className="col-md-8">
            <h5>Scroll Down</h5>
            <button
              onClick={goDown}
              style={{ textDecoration: "None", border: "None" }}
            >
              <i
                className="fas fa-chevron-down"
                ref={ref}
                style={{ color: "black" }}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
