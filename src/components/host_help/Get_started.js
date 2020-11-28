import React from "react";
import Host_help from "./Host_help";

function Get_started() {
  return (
    <>
      <section className="ready-host">
        <div className="row">
          <div className="col-md-6 col-12">
            <h1>Ready to host?</h1>
          </div>
          <div className="col-md-6 col-12">
            <span>
              Create a listing that fits your hosting style—we'll give you tips
              to make your place shine. Start now and finish any time.
            </span>
            <br />
            <button className="getstarted-btn">Get started</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Get_started;
