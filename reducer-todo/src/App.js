import React, { useReducer } from 'react';

import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";

import { initialState, todoReducer } from "./reducers/reducer";


function App() {
  
  const [state, dispatch] = useReducer(todoReducer, initialState); 
    console.log(state)
    const addTodo = (todo) => {
     
      //replacing old code with reducer terms
     dispatch({
       type:"ADD_TODO",
       payload: todo
     })
    };

    const toggleTodo = todoId => {
     dispatch({
       type:"TOGGLE_COMPLETED",
       payload: todoId
     })
    };
    const clearCompleted = () => {
     
      dispatch({
        type: "CLEAR_COMPLETED"

      })
    };

 
    return (
      <div className="App">
        <div className="header">
         
          <h1>Welcome to T0D0</h1>
         
          <TodoForm addTodo={addTodo}
          />
      </div>
      <TodoList
        todos={state}
        toggleTodo={toggleTodo}
        clearCompleted={clearCompleted}
        />
        </div>
    )

}

export default App;
