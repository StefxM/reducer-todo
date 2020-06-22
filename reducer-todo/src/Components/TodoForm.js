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

import React, {useState, useReducer} from "react"; 
//import "./Todo.css";


function TodoForm() {

const [todo, setTodo] = useState("");
const [state, dispatch] = useReducer() 



    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitTodo = e => {
        e.preventDefault();
        this.setState({ todo:'' });
        this.props.addTodo(e, this.state.todo);
    };

    render(){
        console.log("rendering form");
        return(
            <form onSubmit={this.submitTodo}>
                <input
                    type="text"
                    value={this.state.todo}
                    name="todo"
                    onChange={this.handleChanges}/>
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;