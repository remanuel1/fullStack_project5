import React, { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const user = JSON.parse(localStorage.getItem('current'));

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user.id}/posts`
      );
      const posts = await response.json();
      setPosts(posts);
    }
    getPosts();
  }, [user]);

  function handlePostClick(post) {
    setSelectedPost(post);
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <button onClick={() => handlePostClick(post)}>
              {post.title}
            </button>
          </li>
        ))}
      </ul>
      {selectedPost && (
        <div>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.body}</p>
        </div>
      )}
    </div>
  );
}

export default Posts;
