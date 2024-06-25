import React from 'react';
import './FeedbackSection.css';

const feedbacks = [
  {
    id: 1,
    movieId: 1,
    user: 'John Doe',
    comment: 'An absolutely moving experience. The Shawshank Redemption is a masterpiece!',
    rating: 5,
    date: '2024-06-20'
  },
  {
    id: 2,
    movieId: 2,
    user: 'Jane Smith',
    comment: 'The Godfather is a classic that never gets old. Fantastic performances!',
    rating: 5,
    date: '2024-06-21'
  },
  {
    id: 3,
    movieId: 3,
    user: 'Alex Johnson',
    comment: 'The Dark Knight is an exceptional film with a gripping story and stellar acting.',
    rating: 5,
    date: '2024-06-22'
  },
  {
    id: 4,
    movieId: 4,
    user: 'Emily Davis',
    comment: '12 Angry Men is a brilliant display of character dynamics and intense storytelling.',
    rating: 4,
    date: '2024-06-23'
  },
  {
    id: 5,
    movieId: 5,
    user: 'Michael Brown',
    comment: 'Schindler\'s List is a powerful and haunting depiction of historical events.',
    rating: 5,
    date: '2024-06-24'
  }
];

function FeedbackSection() {
  return (
    <div className="FeedbackSection">
      <h2>Feedback</h2>
      {feedbacks.map(feedback => (
        <div className="feedback-item" key={feedback.id}>
          <p><strong>Movie ID:</strong> {feedback.movieId}</p>
          <p><strong>User:</strong> {feedback.user}</p>
          <p><strong>Comment:</strong> {feedback.comment}</p>
          <p><strong>Rating:</strong> {feedback.rating} / 5</p>
          <p><strong>Date:</strong> {feedback.date}</p>
        </div>
      ))}
    </div>
  );
}

export default FeedbackSection;
