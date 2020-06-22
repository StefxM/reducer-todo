import React from "react";

import Todo from "./Todo";

const TodoList = props => {
    console.log(props);
//?? binding to make .this work in the callback, but no idea what to bind
    return(
        <div className="todo-list">

        {props.todoTasks.map(todo => (
         <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo}
         />              
        ))}
        <button className="clearbutton" onClick={props.clearCompleted}>Done</button>
        </div>
    );
};

export default TodoList;