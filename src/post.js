import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);

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

  useEffect(()=> {
    setComments([])
  }, [selectedPost]);


  function handlePostClick(post) {
    setSelectedPost(post);
    const liItem = document.getElementsByTagName("li");
    for (let i = 0; i < liItem.length; i++) {
      liItem[i].classList.remove("select");
    }
    const select_p = document.getElementById(post.id);
    select_p.classList.add("select");
  }

  const handleShowComments = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${selectedPost.id}/comments`
    );
    const data = await response.json();
    setComments(data);
  }

  return (
    <div className="posts">
      <div className="posts_list">
        <h1>Posts List</h1>
        <ul>
          {posts.map((post) => (
            <Link to={`${post.id-((user.id-1)*10)}`}>
              <li id={post.id} key={post.id} onClick={() => handlePostClick(post)}>
                {post.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {selectedPost && (
        <div className="posts_comments">
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.body}</p>
          <button className="show_comments" onClick={handleShowComments}>
            Show the comments
          </button>
          {comments.map((comment) => (
            <div className="posts_comments_item" key={comment.id}>
              <p> <strong> name: </strong>{comment.name} </p>
              <p> <strong>email: </strong>{comment.email} </p>
              <p> <strong>body:</strong> {comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Posts;
