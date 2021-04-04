import React from "react";
import image1 from "../../images/review1.png";
import image2 from "../../images/review2.png";

export const Review = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 offset-md-4">
            <h2>
              Our clients like us
              <i class="fas fa-heart" style={{ color: "green" }}></i>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-m-4 offset-md-4">
            <p>Thank you for your trust! We say it's a thing of synergy.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div
              id="carouselExampleDark"
              class="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img src={image1} class="d-block w-100" alt="..." />
                </div>

                <div class="carousel-item" data-bs-interval="2000">
                  <img src={image2} class="d-block w-100" alt="..." />
                </div>
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
