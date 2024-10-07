import getComments from "@/lib/getRequest";
import React from "react";

const Comments = async () => {
  interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }

  const comments = await getComments();

  return (
    <div>
      <h1>Total Comments</h1>
      {comments.map((comment: Comment) => (
        <div key={comment.id}>Email: {comment.email}</div>
      ))}
    </div>
  );
};

export default Comments;
