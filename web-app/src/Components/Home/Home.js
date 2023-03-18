import React from "react";
import "../../App.css"
// background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
export default function () {
  return (
    <div>
      <section>
        <div className="container-fluid back" style={{ height: "100vh" }}>
          <div
            className="row justify-content-center align-items-center text-center"
            style={{ height: "100vh" }}
          >
            <div className="col-md-10 m-3">
              {/* text-capitalize" in h2 class to capitalize 1st letter. */}
              <h2 className="display-2">
                <span className="text-warning">Social Shield</span>
                {/* <span className="fw-bold text-white"> Website</span> */}
              </h2>
              <p className="h3 fw-light fst-italic m-3">
                Identifying Toxic Comment using Deep Learning
              </p>
              {/* <a href className="btn btn-warning btn-lg">
                Click here
              </a>
              <a href className="btn btn-danger btn-lg m-3">
                Click here
              </a> */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid bg-light">
          <div className="row justify-content-center text-center p-5">
            <div className="col-md-10">
              <h2 className="display-3 text-warning">Skills</h2>
              <p className="lead">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="row text-center justify-content-center">
            <div className="col-md-4 col-10 mb-3">
              <i className="fa fa-desktop text-warning fa-6x mb-3" />
              <h1 className="text-secondary">Development</h1>
              <p className="text-muted">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reprehenderit, eaque!
              </p>
              <a href className="btn btn-outline-warning">
                Learn more
              </a>
            </div>
            <div className="col-md-4 col-10 mb-3">
              <i className="fa fa-edit text-warning fa-6x mb-3" />
              <h1 className="text-secondary">Design</h1>
              <p className="text-muted">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reprehenderit, eaque!
              </p>
              <a href className="btn btn-outline-warning">
                Learn more
              </a>
            </div>
            <div className="col-md-4 col-10 mb-3">
              <i className="fa fa-cogs text-warning fa-6x mb-3" />
              <h1 className="text-secondary">Creativity</h1>
              <p className="text-muted">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reprehenderit, eaque!
              </p>
              <a href className="btn btn-outline-warning">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
