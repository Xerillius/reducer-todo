import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    const {todoList, toggleComplete} = props;
    console.log(todoList);
    return (
        <ul>
            {todoList.map(todo => {
                return(
                    <Todo id={todo.id} item={todo.item} completed={todo.completed} toggleComplete={toggleComplete}/>
                );
            })}
        </ul>
    );
}

export default TodoList;