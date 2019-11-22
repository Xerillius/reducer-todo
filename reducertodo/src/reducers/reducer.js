export const initialState = {
    todoList: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: Date.now()
        }
    ]
}

export const TodoReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD":
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        item: action.text,
                        completed: false,
                        id: Date.now()
                    }
                ]};

        case "COMPLETE":
            return {
                ...state,
                todoList: state.todoList.map( todo =>
                    todo.id === action.id ? {
                        ...todo,
                        completed: !todo.completed
                    } : todo)
            };

        case "CLEAR_COMPLETE":
            return {
                ...state,
                todoList: state.todoList.filter(todo => !todo.completed)
            };
            
        default :
            return state;
    }
}