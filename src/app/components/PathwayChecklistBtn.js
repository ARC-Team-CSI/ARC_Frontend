import React from "react";
import "./PathwayChecklistBtn.css";

function PathwayChecklistBtn() {
    return (
        <div>
            <button
                onClick={(event) => (window.location.href = "/PathwayChecklistPage")}
                className="pathwaychecklistBg">
                <a className="pctitle">
                    Pathway Checklist
                </a>
                <hr></hr>
                <a className="pcdescription">
                    Intro for Pathway Checklists
                </a>
            </button>
        </div>
    );
}

export default PathwayChecklistBtn;