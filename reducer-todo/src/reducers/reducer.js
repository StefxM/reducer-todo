

export const initialState = [
    {
    item: "Learn about Reducers",
    completed: false,
    id: 3892987589,
}
]

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO" :
            return [...state, {item: action.payload, id:Date.now(), completed:false }]

        case "TOGGLE_COMPLETED" :
           const newState = state.map(todo => {
                if (todo.id === action.payload){
                    todo.completed=!todo.completed
                    return todo
                }else {
                    return todo
                }});

        return [...state,newState]

        case "CLEAR_COMPLETED":
            const clearcomplete = state.filter(todo => !todo.completed)
            return [...clearcomplete]
            
            default:
                return state;
    }
};