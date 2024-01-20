import React , {useState} from "react";
import AjoutBudget from "./ajoutBudget";

const Liste = () => {
    return (
        <div>
            <div>
                <ul className="list-group">
                    <AjoutBudget/>
                </ul>
            </div>
            
        </div>
    )
}

export default Liste;