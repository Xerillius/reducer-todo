import React, { useReducer } from 'react';
import './App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { TodoReducer, initialState } from './reducers/reducer';

function App() {
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  const addTodo = item => dispatch({type: 'ADD', text: item });
  const toggleCompleted = id => dispatch({type: 'COMPLETE', id: id});
  const clearComplete = () => dispatch({type: 'CLEAR_COMPLETE' });

  return (
    <div className="App">
      <TodoList todoList={state.todoList} toggleComplete={toggleCompleted}/>
      <TodoForm addTodo={addTodo} clearComplete={clearComplete}/>
    </div>
  );
}

export default App;
