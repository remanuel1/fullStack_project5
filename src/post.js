import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Posts() {

    const [posts, setPosts] = useState([]);

    const user = JSON.parse(localStorage.getItem('current'));


    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${match.params.userId}`);
            const data = await response.json();
            setPosts(data);
          };
    },
    fetchPosts();
    }, [user]);

  function toggleCompleted(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleSortChange(e) {
    setSortBy(e.target.value);
  }

  const sortedTodos = [...todos].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

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
        <label htmlFor="sort">Sort by:</label>
        <select name="sort" id="sort" value={sortBy} onChange={handleSortChange}>
          <option value="title">Title</option>
          <option value="id">ID</option>
          <option value="completed">Completed</option>
          <option value="a-z">A-Z</option>

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
                onChange={() => toggleCompleted(todo.id)}
              />
              {todo.title}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Posts;
