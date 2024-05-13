import React, { useState } from 'react';

function FeedbackPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();

    if (!name || !email || !message) {
      setStatus('error');
      return;
    }

    // Send feedback to server or store it locally
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    setStatus('success');
  };

  return (
    <div className="feedback-page">
      <div className="header">
        <h1>Feedback</h1>
      </div>
      <div className="main-content">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            rows="5"
            cols="50"
            value={message}
            onChange={event => setMessage(event.target.value)}
          ></textarea>
          {status === 'error' && <p>Please fill out all required fields.</p>}
          {status === 'success' && <p>Thank you for your feedback!</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="footer">
        <p>&copy; {new Date().getFullYear()} OneStopShop. All rights reserved.</p>
      </div>
    </div>
  );
}

export default FeedbackPage;