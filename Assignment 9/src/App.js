import React, { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
import "./App.css";
const App = () => {
    const [item, setitem] = useState("");
    const [itemArray, setItemArray] = useState([]);
    const [btn, setbtn] = useState(false);
    const [vid, setvid] = useState(null);
    const setValue = (event) => {
        setitem(event.target.value);

    }

    const callTheValue = () => {
        if (item !== "") {
            setItemArray((old) => {
                return [...old, item];
            })
            setitem("");

        }
        else {
            alert("Text is required")
        }
    }

    const deletee = (id) => {

        setItemArray((olditem) => {
            return olditem.filter((arrayelemet, index) => {
                return index !== id;
            })
        })
    }

    const editTask = (id) => {
        setbtn(true);
        setitem(itemArray[id]);

        setvid(id);
    }
    const editkrdo = () => {
        const newt = [...itemArray];
        newt[vid] = item;
        setItemArray(newt);
        setvid(null);
        setbtn(false);

    }
    const moveUp = (id) => {

        const newt = [...itemArray];
        let temp = newt[id];
        if (newt.length > 1 && (id - 1) >= 0) {
            newt[id] = newt[id - 1];
            newt[id - 1] = temp;
        }
        setItemArray(newt);

        console.log("move");
    }

    const moveDown = (id) => {

        const newt = [...itemArray];
        if (newt.length > 1 && (id + 1) < newt.length) {
            let temp = newt[id];
            newt[id] = newt[id + 1];
            newt[id + 1] = temp;
        }
        setItemArray(newt);

    }
    return (

        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-12 p-3 main">
                        <div className="jii container text-center">


                            <h1 className="text-center m-3 head">Todo List ✏️</h1>
                            <div className="internal">
                                <input type="text" className="form-control me-2" id="gg" onChange={setValue} value={item} placeholder="Add a new task &#9998;" />

                                {btn ? <button className="btn btn-outline-dark btn-primary" id="add" onClick={editkrdo}><i className="far fa-save"></i></button> : <button className="btn btn-outline-dark btn-primary" id="add" onClick={callTheValue}> <i className="fas fa-plus"></i></button>
                                }
                                <div className="order">
                                    <ol className="ul">

                                        {itemArray.map((value, index) => {
                                            return <List
                                                element={value}
                                                id={index}
                                                deletee={deletee}
                                                editTask={editTask}
                                                moveUp={moveUp}
                                                moveDown={moveDown}

                                            />
                                        })
                                        }
                                    </ol>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default App;