import React from "react";

export default function Login() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8 col-md-6 col-lg-4 offset-sm-4 offset-sd-3 offset-lg-4">
              <h1 className="mb-3 text-center">Please log in</h1>
              <form className="mb-3">
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="example@email.com"
                    id="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
              <div className="text-center">
                <p>or..</p>
                <a href="/register" className="btn btn-success">
                  Create account
                </a>
                <p className="small">
                  <a href="#">Have you forgotten your account details?</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
