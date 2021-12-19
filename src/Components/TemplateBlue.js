import React from "react";

function TemplateBlue({ children }) {
  return (
    <div>
      <section
        id="header"
        className="herobg d-flex overflow-hidden"
        style={{ height: "92vh", overflow: "hidden" }}
      >
        <div
          className="container-fluid"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-10 col-sm-12 col-xs-12 mx-auto">
              <div className="row my-auto">
                <div
                  style={{
                    display: "flex",
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: "auto",
                    paddingTop: "auto",
                    width: "100vw",
                  }}
                >
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TemplateBlue;
