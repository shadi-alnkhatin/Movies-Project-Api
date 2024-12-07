import React from 'react';
import '../assets/css/comments.css';
const CommentList = ({ comments }) => {
  return (
    <div className="comments-container">
    {comments.map((comment, index) => (
      <div key={index} className="comment">
        <img
          src={`https://robohash.org/${comment.user.id}`}
          alt="User Avatar"
          className="avatar"
        />
        <div className="comment-content">
          <p className="username">{comment.user.name}</p>
          <p className="content">{comment.content}</p>
        </div>
      </div>
    ))}
  </div>
  
  );
};

export default CommentList;
