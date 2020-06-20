import React from 'react';

import './App.css';
import TodoForm from './Components/TodoForm';

const todoTasks = [
  {
    task: 'Organize Garage', // title
    id: 1528817077286, //time stamp - `Date.now()`
    completed: false//completed toggle
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
      task: 'Wash Dishes',
      id: 1528817084361,
      completed: false
  },
  {
      task: 'Laundry',
      id: 1528817084364,
      completed: false
  },
  {
      task: 'Meal Prep',
      id: 1528817084366,
      completed: false
  },
  {
      task: 'Set up App',
      id: 1528817084369,
      completed: false
  }
];




function App() {
  return (
    <div className="App">
      <TodoForm/>
    </div>
  );
}

export default App;
