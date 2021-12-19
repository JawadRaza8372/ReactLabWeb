import React from "react";
import CodeTemplate from "./CodeTemplate";
import PostCodeTemplate from "./PostCodeTemplate";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function Avatarr({ titlell, parar }) {
  const exitDiv = {
    init: { x: "-100vw" },
    anim: { x: 0, transition: { duration: 1 } },
    animat: { x: "-100vw", transition: { duration: 1, ease: "easeInOut" } },
  };

  const { codeSni } = useSelector((state) => state.codeSni);

  return (
    <motion.div variants={exitDiv} exit="animat" initial="init" animate="anim">
      <CodeTemplate title={titlell} titlepara={parar}>
        <h1 className="maincolor">Usage</h1>
        {codeSni &&
          codeSni.map((avin, index) => {
            if (avin.post.category === titlell) {
              return (
                <PostCodeTemplate
                  key={index}
                  UseTitle={avin.post.title}
                  videoLink={avin.post.video}
                  UsePara={avin.post.para}
                  codee={avin.post.code}
                  imgsrc={avin.post.img}
                />
              );
            } else {
              return null;
            }
          })}
      </CodeTemplate>
    </motion.div>
  );
}
export default Avatarr;
