import React from "react";
import { children } from "react/cjs/react.production.min";

function ComponentA(props) {

    return (
        <div>Component A =D
            <div>{props.children}</div>
        </div>
        
    )
}

export default ComponentA