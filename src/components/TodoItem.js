import React from "react";
import PropTypes from "prop-types";
import "../styles/Button.css"
import Button from "./Button";


const TodoItem = ({ todo, del}) => {
    const delById = id => {
        del(id)
    }
    return(
        <div style={todoItem}>
            <p>{todo.title}</p>
            <div>
                {/* <Button text="edit" variant="success"/> */}
                <Button text="Hapus" variant="warning" action={() => delById(todo.id)}/>
            </div>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    del: PropTypes.func.isRequired
}

export default TodoItem;

const todoItem = {
    background: "#2da4fb",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}