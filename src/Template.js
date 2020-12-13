import React from 'react'

function Template({children}) {
    return (
        <>
           <section id="header" className="d-flex align-items-center">
<div className="container-fluid nav-bg">
    <div className="row">
<div className="col-8 mx-auto">
<div className="row">

{children}

</div>
</div>
</div>
</div>
</section> 
        </>
    )
}

export default Template
