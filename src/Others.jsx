import React from "react";
import CodeTemplate from "./CodeTemplate";
import PostCodeTemplate from "./PostCodeTemplate";
function Others(){
    let para="React Lab+ contains many other features and reusable features like themes build by React Lab ,IOTs components ,Firebase Backend etc.";
    return(<>
      <CodeTemplate title="React Lab+" titlepara={para}>
      </CodeTemplate>
    </>);
}
export default Others;