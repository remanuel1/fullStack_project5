import React, { useState, useEffect } from "react";

function Todos() {

  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState(false);
  //const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState('serial');
  
  const user = JSON.parse(localStorage.getItem('current'));

  useEffect(() => {
    async function getTodos() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user.id}/todos`
      );
      const todos = await response.json();
      setTodos(todos);
    }
    getTodos();
  }, [user]);

  function toggleCompleted(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  // function handleSortChange(e) {
  //   setSortBy(e.target.value);
  // }

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };



   const sortedTodos = [...todos].sort((a, b) => {
     if (sortOrder === 'serial') {
       return a.id - b.id;
     } else if (sortOrder === 'completed') {
       return a.completed - b.completed;
     } else if (sortOrder === 'a-z') {
       return a.title.localeCompare(b.title);
     } else if (sortOrder === 'random') {
       return Math.random() - 0.5;
     }
   });

  const updateTodo = async (todo) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          completed: !todo.completed,
        }),
      });
      const data = await response.json();
      setTodos(todos.map((t) => (t.id === data.id ? data : t)));
    } catch (error) 
    {
      alert("there is problem");
    }
  };


  // const sortedTodos = [...todos].sort((a, b) =>
  //   a[sortBy].localeCompare(b[sortBy])
  // );

  return (
    <div>
      <h1>{user.name} List Todos</h1>
      <div>
        <label htmlFor="completed">Show completed:</label>
        <input
          type="checkbox"
          name="completed"
          id="completed"
          checked={completed}
          onChange={() => setCompleted(!completed)}
        />
      </div>
      <div>
        <label htmlFor="sort">Sort by:
        </label>
        <select name="sort" id="sort" value={sortOrder} onChange={handleSortOrderChange}>
          <option value="serial">Serial</option>
          <option value="completed">Completed</option>
          <option value="a-z">A-Z</option>
          <option value="random">Random</option>

        </select>
      </div>
      <ul>
        {sortedTodos
          .filter((todo) => !completed || todo.completed)
          .map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                // onChange={() => toggleCompleted(todo.id)}
                onChange={() => updateTodo(todo)}
              />
              <span className="todos-text">{todo.title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Todos;
