import React from "react";

const Cloth = ({ image, color, type }) =>{
    return(
        <div>
            <div style = {{ height: 460, width: 460, backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`, position: "relative" }}>
                <img src = {require(`../images/${type}/${image}`)} style = {{ position: "absolute", height:"100%", width: "100%" }} />
            </div>
        </div>
    )
}
export default Cloth;