import React from 'react'
import Template from './Template'

function CodeTemplate({title,titlepara,children}) {
    return (
       <Template>
                        <div className="container px-4 py-2">
            <br/>
            <br/>
<header><h1>{title}</h1></header>
<p>{titlepara}</p>
{children}


   
         
            </div>

</Template>    )
}

export default CodeTemplate
