import React, { useState } from 'react';
import '../assets/css/comments.css';
const CommentForm = ({ movieId, addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      addComment(comment);
      setComment('');
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit} className="comment-form">
    <textarea
      placeholder="Add a comment..."
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      rows="2"
      cols="20"
      className="comment-textarea"
    ></textarea>
    <button type="submit" className="comment-button">Post Comment</button>
  </form>
   <br />
    </div>
  
  );
};

export default CommentForm;

