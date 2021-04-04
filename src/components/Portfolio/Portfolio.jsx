import React, { useState } from "react";
import image1 from "../../images/port1.jpg";
import image2 from "../../images/port2.jpg";
import image3 from "../../images/port3.jpg";
import image4 from "../../images/port4.jpg";
import Fade from "react-reveal/Fade";

export const Portfolio = () => {
  const [reveal, setReveal] = useState(false);

  const revealService = () => {
    if (window.scrollY >= 750) {
      setReveal(true);
    } else {
      setReveal(false);
    }
  };

  window.addEventListener("scroll", revealService);
  return (
    <>
      <Fade left collapse when={reveal ? true : false}>
        <div className="container-fluid bg-light">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8 offset-md-6">
              <h2>Our portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <p>
                User-friendly web pages are our thing. We've also helped some
                awesome businesses with branding and custom solutions.
              </p>
            </div>
          </div>

          <div className="d-flex row">
            <div className="col-sm-4 offset-md-2">
              <figure className="figure">
                <img
                  src={image1}
                  className="figure-img img-fluid rounded"
                  alt="..."
                />
                <figcaption className="figure-caption">
                  <h5 className="offset-md-4">Apartments</h5>
                </figcaption>
              </figure>
            </div>

            <div className="col-sm-4">
              <figure className="figure">
                <img
                  src={image2}
                  className="figure-img img-fluid rounded"
                  alt="..."
                />
                <figcaption className="figure-caption">
                  <h5 className="offset-md-4">Urban Furniture</h5>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="d-flex row">
            <div className="col-sm-4 offset-md-2">
              <figure className="figure">
                <img
                  src={image3}
                  className="figure-img img-fluid rounded"
                  alt="..."
                />
                <figcaption className="figure-caption">
                  <h5 className="offset-md-4">Graspic</h5>
                </figcaption>
              </figure>
            </div>

            <div className="col-sm-4">
              <figure className="figure">
                <img
                  src={image4}
                  className="figure-img img-fluid rounded"
                  alt="..."
                />
                <figcaption className="figure-caption">
                  <h5 className="offset-md-4">
                    Degital Outdoor Media Operator
                  </h5>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};
