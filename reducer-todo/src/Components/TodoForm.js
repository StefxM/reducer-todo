import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/reducer";


const TodoForm = () => {

    const [newTodo, setNewTodo, completedTodo] = useState("");
    const [state, dispatch] = useReducer(todoReducer,initialState);

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    return(
        <div>
              <input 
                className="todo"
                type="text"
                name="newtodo"
                value={newTodo}
                onChange={handleChanges}
                />
                <button onClick={() => {dispatchEvent({ type: "ADD_TODO", payload: newTodo})}}>Add Todo</button>   
          
                <div>
                <button onClick={() => {dispatchEvent({ type:"CLEAR_COMPLETED", payload: completedTodo})}}>Completed</button>  
            </div>
            
        </div>
    );
};

export default TodoForm;