import React from 'react'
import "./App.css";

const List = (props) => {
    return (
        <li className="list">{props.element}
            <span className="hel me-2">
                <i onClick={() => {
                    props.deletee(props.id)
                }}
                    className="t fas fa-eraser"></i>
                <i onClick={() => { props.editTask(props.id) }} className="t far fa-edit"></i>
                <i onClick={() => { props.moveUp(props.id) }} className="t fas fa-long-arrow-alt-up"></i>
                <i onClick={() => { props.moveDown(props.id) }} className="t fas fa-long-arrow-alt-down"></i></span>
        </li>

    )
}

export default List;