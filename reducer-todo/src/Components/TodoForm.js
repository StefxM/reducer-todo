import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/reducer";


const TodoForm = () => {

    const [newTodo, setNewTodo] = useState("");
    const [state, dispatch] = useReducer(todoReducer,initialState);

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    return(
        <div>
            <form>
                <input 
                className="todo"
                type="text"
                name="newtodo"
                value={newTodo}
                onChange={handleChanges}
                />
                <button placeholder="Add Todo" onClick={() => {dispatchEvent({ type: "ADD_TODO", payload: newTodo})}}>Add Todo</button>
                {/*<button placeholder="Delete" onClick={() => {dispatchEvent({ type:"COMPLETED", payload: completedTodo})}}>Completed</button>*/}
            </form>
        </div> 

    )
}

export default TodoForm;