import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your email service details from email.js
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const userId = 'YOUR_USER_ID';

    // Send email
    emailjs.send(serviceId, templateId, {
      name: name,
      email: email,
      review: review,
    }, userId)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Reset form fields after successful email submission
        setName('');
        setEmail('');
        setReview('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div id="email" className="w-full md:w-600 px-4 py-6 md:px-8 md:py-10">
      <h1 className="mt-10 text-5xl font-bold text-center">Feedback</h1>
      <form onSubmit={handleSubmit} className="mt-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="review" className="block text-gray-700 font-bold mb-2">
            Review:
          </label>
          <textarea
            id="review"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            placeholder="Enter your review"
            value={review}
            onChange={handleReviewChange}
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
