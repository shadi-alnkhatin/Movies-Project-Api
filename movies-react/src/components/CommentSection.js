import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const CommentSection = ({ movieId }) => {
  const [comments, setComments] = useState([]);

  // Fetch comments for the movie from the API
  useEffect(() => {
   axios.get(`http://127.0.0.1:8000/api/comments/${movieId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
      })
      .then((response) => {
        console.log(response.data.data);
        setComments(response.data.data); // assuming response structure is { data: { data: { content: [...] } } }
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }, [movieId]);

  // Add a comment
  const addComment = (newComment) => {
    axios
      .post(
        `http://127.0.0.1:8000/api/add-comments/${movieId}`,
        { content: newComment },
        { headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` } }
      )
      .then((response) => {
        setComments([...comments, response.data.data]);
      })
      .catch((error) => {
        console.error('Error adding comment:', error);
      });
  };

  return (
    <div>
        <br />
        <br />
      <CommentForm movieId={movieId} addComment={addComment} />
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentSection;
