"use client";
import React, {useEffect, useState} from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const allData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    allData();
  }, []);

  interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  return (
    <div>
      <h1>All Post:</h1>
      {posts.map((post: Post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default Posts;
