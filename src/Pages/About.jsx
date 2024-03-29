import React from "react";
import CodeTemplate from "../Components/CodeTemplate";
import PostCodeTemplate from "../Components/PostCodeTemplate";
import { motion } from "framer-motion";
function About() {
  const exitDiv = {
    init: { x: "-100vw" },
    anim: { x: 0, transition: { duration: 1 } },
    animat: { x: "-100vw", transition: { duration: 1, ease: "easeInOut" } },
  };

  let para =
    "The aim of React Native Elements is to provide an all-in-one UI kit for creating apps in react native. There are many great ui components made by developers all around open source. React Native Elements takes the hassle of assembling these packages together by giving you a ready made kit with consistent api and look and feel.";
  return (
    <motion.div variants={exitDiv} exit="animat" initial="init" animate="anim">
      <CodeTemplate title="Getting Started" titlepara={para}>
        <PostCodeTemplate
          UseTitle="Installation"
          UsePara="Installing React Native Elements depends on your type of react native project."
          codee="yarn add @umeraftab/reactlab"
          codee2="npm install @umeraftab/reactlab"
        >
          <ul>
            <li>Expo | Create React Native App</li>
            <li>React Native CLI</li>
          </ul>

          <p>
            Expo or create-react-native-app projects include
            react-native-vector-icons out of the box, so all you need to do is
            install react-native-elements.
          </p>
          <ul>
            <li>NPM for Non-ios</li>
            <li>yarn for Ios</li>
          </ul>
        </PostCodeTemplate>
        <PostCodeTemplate
          UseTitle="Install react-native-vector-icons"
          UsePara="With create-react-native-app projects include react-native-vector-icons out of the box, hence this step can be skipped. if your project dont require Icons
               "
          codee="yarn add react-native-vector-icons"
          codee2="npm install react-native-vector-icons"
        />
        <PostCodeTemplate
          UsePara="Link the dependency <0.59"
          codee="npx react-native link react-native-vector-icons"
        />
      </CodeTemplate>
    </motion.div>
  );
}
export default About;
