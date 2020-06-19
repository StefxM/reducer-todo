import React from 'react';

import './App.css';

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
