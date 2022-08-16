import React from "react";

import { withRouter } from "react-router-dom";

import Button from "elements/Button";

function NotFound(props) {
  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center text-center"
        style={{ height: "100vh" }}
      >
        <div className="col-4">
        Apakah kamu tersesat?
          <p className="pt-4">
          Beberapa halaman masih dalam pengembangan, mungkin Anda dapat kembali jika Anda
            ingin
          </p>
          <div>
            <Button
              className="btn mt-5"
              type="button"
              onClick={() => props.history.goBack()}
              isLight
            >
              Ya, tolong bawa saya ke tempat yang aman
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(NotFound);
