import React from "react";
import MiniCard, { MiniCard2 } from "../Components/MiniCard";
import { useSelector } from "react-redux";
function ComponentUpdateDELT() {
  const { menu } = useSelector((state) => state.menu);
  const { codeSni } = useSelector((state) => state.codeSni);

  return (
    <div className="herobg">
      <div className="m-5">
        <h1 style={{ textAlign: "center", color: "white" }}> Category </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 mx-auto">
            <div className="container" style={{ padding: "0 10px" }}>
              <div className="row gy-4">
                {menu &&
                  menu.map((avin) => {
                    return (
                      <MiniCard2
                        title={avin.post.text}
                        key={avin.id}
                        path={avin.post.path}
                        data={avin}
                      />
                    );
                  })}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <div className="m-5">
        <h1 style={{ textAlign: "center", color: "white" }}> Components </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 mx-auto">
            <div className="container" style={{ padding: "0 10px" }}>
              <div className="row gy-4">
                {codeSni &&
                  codeSni.map((avin) => {
                    return (
                      <MiniCard
                        title={avin.post.title}
                        key={avin.id}
                        category={avin.post.category}
                        data={avin}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentUpdateDELT;
