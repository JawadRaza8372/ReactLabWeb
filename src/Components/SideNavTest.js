import React from "react";
import sideManuItems from "./sideManuItems";
import { sideManuItem3 } from "./sideManuItems";
import { Navbar, Nav } from "react-bootstrap";
import NavLists, { NavLists2 } from "./NavLists";
import ReactNavbar from "../Navigation/ReactNavbar";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function SideNavTest({ userStatus, children }) {
  const btnHover = {
    hovers: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        yoyo: Infinity,
        duration: 0.4,
        type: "spring",
        stiffness: 520,
      },
    },
  };
  const exitDiv = {
    init: { x: "-100vw" },
    anim: { x: 0, transition: { duration: 0.3 } },
    animat: { x: "-100vw", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const { menu } = useSelector((state) => state.menu);

  return (
    <motion.div variants={exitDiv} exit="animat" initial="init" animate="anim">
      <ReactNavbar userStatus={userStatus} />
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div className="col-12">
          <div className="row">
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-3 col-xl-2  order-1">
              <div style={{ overflowY: "auto", maxHeight: "89vh" }}>
                <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        paddingTop: "10px",
                      }}
                    >
                      <Navbar.Brand href="/home">
                        <motion.h5
                          style={{ color: "#3578e5" }}
                          variants={btnHover}
                          whileHover="hovers"
                        >
                          Create Something New
                        </motion.h5>
                      </Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    </div>

                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav>
                        <div>
                          <NavLists title="Start" item={sideManuItems} />
                          {menu && <NavLists2 title="Components" item={menu} />}
                          <NavLists title="React Lab+" item={sideManuItem3} />
                        </div>
                      </Nav>
                    </Navbar.Collapse>
                  </div>
                </Navbar>
              </div>
            </div>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 order-2">
              <div style={{ overflowY: "auto", maxHeight: "89vh" }}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SideNavTest;
