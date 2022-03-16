import React from "react";

function PropUseAbuse(props){
    
    function theFunctionOutside(){
        console.log(props);
    }

    return(
        <div>
            <h1>What do you think it is?</h1>
            <p>It is a prop drop {props.text}</p>
            <h3>what is happening? {props.crax}</h3>
        </div>
    );

}
export default PropUseAbuse;