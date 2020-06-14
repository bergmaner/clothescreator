import React from "react";

const TShirt = () =>{
    return(
        <div>
            <div style = {{ height: 460, width: 460, backgroundColor: "red", position: "relative" }}>
                <img src = {require("../images/right.png")} style = {{ position: "absolute", height:"100%", width: "100%" }} />
            </div>
        </div>
    )
}
export default TShirt;