import React, { useEffect, useState } from 'react';
import './App.css';

const url = process.env.REACT_APP_API_URL;

function App() {
  const [todoList, setTodoList] = useState([]);

  const fetchTodoList = async () => {
    try {
      const response = await fetch(`${url}/todo`);
      const json = await response.json();
      setTodoList(json);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  return (
    <div className="App">
      {todoList.length ? (
        todoList.map(todo => <p key={todo.id}>{todo.text}</p>)
      ) : (
        <p>Empty</p>
      )}
    </div>
  );
}

export default App;
