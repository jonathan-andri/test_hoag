import React, {useState} from "react";

const AjoutBudget = () => {
    // var Date = new Date().toLocalDateString("yyyy-MM-dd");
    const [listeBudget, setListeBudget] = useState([]);
    const[listeCredit, setListeCredit] = useState([]);
    const[listeDebit, setListeDebit] = useState([])
    const [newBudget, setNewBudget] = useState({});
    const [id, setId] = useState(1)

    const Ajouter = () => {
            let a = [...listeBudget]
            a.push(
                {
                    // date: Date, 
                    id_budget: id,
                    montant: newBudget
                }
            )
        if(newBudget<0) {
            let a = [...listeDebit]
            a.push(
                {
                    // date: Date, 
                    id_budget: id,
                    montant: newBudget
                }
            )
            setListeDebit(a);
        }
        else {
            let a = [...listeCredit]
            a.push(
                {
                    // date: Date, 
                    id_budget: id,
                    montant: newBudget
                }
            )
            setListeCredit(a);
        }
        setId(id => id+1)
    } 
    
    const Effacer = (target) => {
        setId(id);
    }

    return (
        <>
            <form onSubmit={Ajouter}>
                {/* <div>{Date}</div> */}
                <div className="form-group">
                    {Ajouter}
                    <label className="form-control">budget</label>
                    <input className="form-control" type="text" onChange={(e)=>setNewBudget(e.target.value)}/>
                    <button className="btn btn-success form-control" type="button" value="Ajouter" onClick={Ajouter}>Ajouter</button>
                    <h1>Les Credits</h1>
                    {listeCredit.map(liste => 
                    <div key="cred">
                        <li className="list-group-item">Budget {liste.id_budget} - Montant {liste.montant}
                            <button className="btn btn-danger">Effacer</button>
                        </li>
                    </div>
                    )}
                    <h1>Les Debits</h1>
                    {listeDebit.map(liste => 
                    <div key="deb">
                        <li className="list-group-item">Budget {liste.id_budget} - Montant {liste.montant}
                            <button className="btn btn-danger">Effacer</button>
                        </li>
                    </div>
                    )}
                </div>  
            </form>
        </>
    )
    
}

export default AjoutBudget;