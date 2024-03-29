import React from "react";

function Template({ children }) {
  return (
    <div>
      <section id="header">
        <div
          className="container-fluid"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 p-2 mx-auto">
              <div className="row">{children}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Template;
