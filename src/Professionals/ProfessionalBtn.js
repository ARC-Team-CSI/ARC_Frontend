import React from "react";
import "./ProfessionalsBtn.css"

function ProfessionalsBtn(){

  return (
    <div>
        <button
        onClick={(event) => (window.location.href = "/Professional")}
        className="Professional">
            <a className ="title"> Professional </a>
            <br/>
             <a className="description">Ea repellendus natus sed dolorem quam sed quia recusandae ut nemo voluptatem et be </a>
        </button>
    </div>
  )
}
export default ProfessionalsBtn;

