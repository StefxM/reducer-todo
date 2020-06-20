

export const initialState = {
    todo: "",
    adding: false
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO" :
            return {...state, adding: !state.adding};
        case "COMPLETED" :
            return {...state, todo:action.payload, adding:false};
            default:
                return state;
    }
};