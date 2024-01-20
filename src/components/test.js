import React,{useState} from "react";
import "./Test.css";
const Test = () => {
    const[totalCredit, setTotalCredit] = useState(0);
    const[totalDebit, setTotalDebit] = useState(0);
    const [newBudget, setNewBudget] = useState(0)
    const[id, setId] = useState(1); 
    const[budget, setBudget] = useState([]);
    const operation = (e) => {
            e.target.value<0?
            setTotalDebit(totalDebit - parseInt(e.target.value))
            :
            setTotalCredit(totalCredit + parseInt(e.target.value))  
        // }
            setNewBudget(parseInt(e.target.value))
    }
    const add = () => {
        setId(id=>id+1);
        let a = [...budget];
        a.push({
            id: id,
            montant: newBudget
        })
        setBudget(a);
    }

    const del = () => {
        
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
            {/* {input} */}
            {
                budget.map((newBudget)=>(
                    <div key={newBudget.id} className="d-flex flex-row justify-content-between align-item-center">
                        <label className="form-control text-center">Budget {newBudget.id}</label>
                        <input className="form-control" type="number" onBlur={operation}/>
                        <button id="effacer" className="btn">X</button>
                    </div>
                ))
            }
            <button className="btn" onClick={add}>Ajouter Budget</button>
        </>
    )
}

export default Test;
