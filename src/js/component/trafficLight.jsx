import React, {useState} from "react";

const TraffictLight = () => {

    const [sombra, setSombra] = useState("")
    console.log(sombra);
    
    return (
        <div className="div d-flex justify-content-center">
            <div className="div d-flex bg-dark flex-column px-5 my-5 rounded">
                <button className={"btn btn-danger my-3 mx-auto rounded-circle"+" "+(sombra === "red"? "sombra-red": "")} style={{ width: "80px", height: "80px" }} onClick={()=>{setSombra("red")}}></button>
                <button className={"btn btn-warning my-3 mx-auto rounded-circle"+" "+(sombra === "yellow"? "sombra-yellow": "")} style={{ width: "80px", height: "80px" }} onClick={()=>{setSombra("yellow")}}></button>
                <button className={"btn btn-success my-3 mx-auto rounded-circle"+" "+(sombra === "green"? "sombra-green": "")} style={{ width: "80px", height: "80px" }} onClick={()=>{setSombra("green")}}></button>
            </div>
        </div>
    )

}

export default TraffictLight;