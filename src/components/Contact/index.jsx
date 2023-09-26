import { useState } from "react";
import "./contact.css"
export const Contact =() => { 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic form validation
    if (!name || !email || !message) {
      setFormError('All fields are required.');
      return;
    }

    // Your form submission logic goes here
    // For simplicity, we'll just log the form data
    console.log('Form submitted:', { name, email, message });

    // Clear form and error state after submission
    setName('');
    setEmail('');
    setMessage('');
    setFormError('');
  };
    return (
      <div className="wrapper">
         <section id="Contact" className="background">
        <h3 className="Section-Header">Contact Me</h3>
        <div>
            <ul className="info">
                <li>Phone Number: 805.123.4578</li>
                <li>Email Address: Hectorjr_805@yahoo.com</li>
                <li>Instagram</li>
            </ul>
        </div>
      </section>

      <section className="contactform">
      <h2>Contact Information</h2>
      <form className="contactelements" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
          />
        </div>
        {formError && <div style={{ color: 'red' }}>{formError}</div>}
        <button className="submitbutton" type="submit">Submit</button>
      </form>
      </section>
      </div>
    )
  }