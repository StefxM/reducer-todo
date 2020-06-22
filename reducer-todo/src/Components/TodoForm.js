/*import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/reducer";


const TodoForm = () => {

    const [newTodo, setNewTodo] = useState("");
    const [state, dispatch] = useReducer(todoReducer,initialState);

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    return(
        <div>
            {state.item}
            <form>
              <input 
                className="todo"
                type="text"
                name="newtodo"
                value={state.newTodo}
                onChange={handleChanges}
                />
                <button onClick={() => {dispatch({ type: "ADD_TODO", payload: newTodo})}}>Add Todo</button>   
          
               
                <button onClick={() => {dispatch({ type:"CLEAR_COMPLETED"})}}>Completed</button>  
            
                </form>
        </div>
    );
};

export default TodoForm;*/

import React, {useState} from "react"; 
//import "./Todo.css";


function TodoForm(props) {

const [todo, setTodo] = useState("");




    const handleChanges = e => {
        setTodo(e.target.value);
    };

    const submitTodo = e => {
        e.preventDefault();
        props.addTodo(todo);
        setTodo({ todo:'' });
    };

  
        return(
            <form onSubmit={submitTodo}>
                <input
                    type="text"
                    value={todo}
                    name="todo"
                    onChange={handleChanges}/>
                <button>Add</button>
            </form>
        );
    
}

export default TodoForm;