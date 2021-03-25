import React from "react";
import CodeTemplate from "./CodeTemplate";
import PostCodeTemplate from "./PostCodeTemplate";
import UploadPost from "./UploadPost";
import {motion} from "framer-motion"

function About(){
  const exitDiv={init:{x:'-100vw'},anim:{x:0,transition:{duration:1}},animat:{x:"-100vw",transition:{duration:1,ease:"easeInOut"}}};

    let para="This section of the documentation describes the props and examples for all the components from React Native Elements. Please take some time and explore all of the components that are at your disposal!";
    return(<motion.div variants={exitDiv} exit="animat" initial="init" animate="anim">
      <CodeTemplate title="Overview" titlepara={para}>
<PostCodeTemplate UseTitle="Using React Native Elements" UsePara="The components in this library have a single theme running through them. From one central location, we can update the colours used in all components. While this was great for the developers of the library, the actual users also needed a way to use this feature."
 code="import { Button, ThemeProvider } from 'react-native-elements';
const MyApp = () => {
  return (
    <ThemeProvider>

      <Button title='Hey!' />
      
    </ThemeProvider>
  );
};">

<p style={{fontSize:"16px"}}>To customize the theme, or use it within your own components, be sure to check the docs on Customization.
<br/>
</p>
<p style={{fontSize:"16px"}}>But why stop at colours? Why not allow the props of every component to be defined in one central place? And so the idea behind theming with React Native Elements was born!</p>
 </PostCodeTemplate>
      </CodeTemplate>
     
    </motion.div>);
}
export default About;