import React,{useState} from "react";
import "./Test.css";
const Test = () => {
    var[totalCredit, setTotalCredit] = useState(0);
    var[totalDebit, setTotalDebit] = useState(0);
    var [id, setId] = useState(1)
    
    const operation = (e) => {
        e.target.value<0?
        setTotalDebit(totalDebit - parseInt(e.target.value))
        :
        setTotalCredit(totalCredit + parseInt(e.target.value))  
    }
    
    const ip =  <div className="d-flex flex-row justify-content-between">
                    <label className="form-control text-center">Budget {id}</label>
                    <input className="form-control" type="number" onChange={operation}/>
                </div>
    
    const[input, setInput] = useState([ip]);
    
    const add = () => {
        setId(id=>id+1)
        let a = [...input];
        a.push(ip);
        setInput(a);
    }

    return(
        <>
            <div className="d-flex flex-column justify-content-between text-white" id="container">
                <div className="debit">
                    <h4 className="">Total Débit: {totalDebit} Ariary</h4>
                </div>
                <div className="credit">
                    <h4>Total Crédit: {totalCredit} Ariary</h4>
                </div>
            </div>
            {input}
            <button className="btn" onClick={add}>Add</button>
        </>
    )
}

export default Test;