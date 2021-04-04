import React from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

export const Card = () => {
  return (
    <>
      <div
        className="card text-dark bg-light mb-3"
        style={{ maxWidth: "20rem" }}
      >
        <div className="card-header">
          <h2>What we're great at</h2>
        </div>
        <div className="card-body">
          <p className="card-text">
            Fourteen years and 400+ finished web projects have gifted us a
            unique experience on how to create something that is easy to use,
            looks great and earns a profit for your company.
          </p>
          <div className="d-grid gap-2 col-8 mx-auto">
            <button className="btn btn-success mx-auto" type="button">
              Explore full services
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
