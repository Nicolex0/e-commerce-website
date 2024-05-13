import React, { useState } from 'react';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form data
    if (!name ||!email ||!message) {
      alert('Please fill in all fields.');
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Send the form data to a server-side endpoint
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    })
   .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('An error occurred while sending the message.');
      }
    })
   .catch(error => {
      alert('An error occurred while sending the message.');
      console.error(error);
    });
  };

  return (
    <div className="contact-us">
      <div className="header">
        <h1>Contact Us</h1>
      </div>
      <div className="main-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Email: <a href="mailto:contact@OneStopShop.com">contact@OneStopShop.com</a></p>
          <p>Phone: <a href="tel:+254771515168">+254 771 515 168</a></p>
          <p>Address: Star Mall, Nairobi, Kenya</p>
        </div>
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
            <label htmlFor="message">Message:</label>
            <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} rows="5"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="footer">
        <p>&copy; {new Date().getFullYear()} OneStopShop. All rights reserved.</p>
      </div>
    </div>
  );
}

export default ContactPage;