

export const initialState = {
    todo : [{
    item: "Learn about Reducers",
    completed: false,
    id: 3892987589,
    }]
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO" :
            return {...state, todo: action.payload, id:Date.now(), completed:false };

        case "TOGGLE_COMPLETED" :
            return {
                ...state,
                todo: state.todo.map(todos => 
                    todos.id === action.payload ? {...todos, completed: !todos.completed} : todos
                    ),
            };
        case "CLEAR_COMPLETED":
            return {
                todos: state.todo.filter(todos => !todos.completed)
            }
            
            default:
                return state;
    }
};