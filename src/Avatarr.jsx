import React from "react";
import CodeTemplate from "./CodeTemplate";
import PostCodeTemplate from "./PostCodeTemplate";

function Avatarr({titlell}){
    console.log(titlell)
    const posts=[{title:"trial",video:"https://youtu.be/RxjEJOvnC78",para:"https://youtu.be/RxjEJOvnC78",code:"https://youtu.be/RxjEJOvnC78",img:"https://picsum.photos/200/300"},
    {title:"trial",video:"https://youtu.be/RxjEJOvnC78",para:"https://youtu.be/RxjEJOvnC78",code:"https://youtu.be/RxjEJOvnC78",img:"https://picsum.photos/200/300"},
    {title:"trial",video:"https://youtu.be/RxjEJOvnC78",para:"https://youtu.be/RxjEJOvnC78",code:"https://youtu.be/RxjEJOvnC78",img:"https://picsum.photos/200/300"},
    {title:"trial",video:"https://youtu.be/RxjEJOvnC78",para:"https://youtu.be/RxjEJOvnC78",code:"https://youtu.be/RxjEJOvnC78",img:"https://picsum.photos/200/300"}]
    let para="Avatars are found all over ui design from lists to profile screens. They are commonly used to represent a user and can contain photos, icons, or even text.    ";
    return(<>
      <CodeTemplate title="Avatar" titlepara={para}>
      <h1>{titlell}</h1>
      <h1>Usage</h1>
      {posts && posts.map((avin,index)=>{ return <PostCodeTemplate key={index} UseTitle={avin.title} videoLink={avin.video} UsePara={avin.para} code={avin.code} imgsrc={avin.img}/>})}
      </CodeTemplate>
    </>);
}
export default Avatarr;