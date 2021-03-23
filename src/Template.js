import React from 'react'

function Template({children}) {
    return (
        <>
           <section id="header" >
<div className="container-fluid"  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div className="row">
<div className="col-8 mx-auto">
<div className="row my-auto">
<div style={{display: "flex",justifyContent:"center",alignItems: "center",marginTop:"5.5%",marginBottom:"5.5%",paddingBottom:"auto",paddingTop:"auto"}}>
{children}
</div>


</div>
</div>
</div>
</div>
</section> 
        </>
    )
}

export default Template
