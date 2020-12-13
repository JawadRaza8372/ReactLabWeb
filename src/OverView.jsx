import React from "react";
import CodeTemplate from "./CodeTemplate";
import PostCodeTemplate from "./PostCodeTemplate";
import Template from "./Template";

function About(){
    let para="This section of the documentation describes the props and examples for all the components from React Native Elements. Please take some time and explore all of the components that are at your disposal!";
    return(<>
      <CodeTemplate title="Overview" titlepara={para}>
<PostCodeTemplate UseTitle="Using React Native Elements#" UsePara="The components in this library have a single theme running through them. From one central location, we can update the colours used in all components. While this was great for the developers of the library, the actual users also needed a way to use this feature."
 code="import { Button, ThemeProvider } from 'react-native-elements';
const MyApp = () => {
  return (
    <ThemeProvider>
      <Button title=`Hey!` />
    </ThemeProvider>
  );
};">

<p>To customize the theme, or use it within your own components, be sure to check the docs on Customization.</p>
 </PostCodeTemplate>
      </CodeTemplate>
    </>);
}
export default About;