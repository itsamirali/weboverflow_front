import axios from "axios";
import React, { useState } from "react";

const ContactPage = () => {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const contactUsHandler = () => {
    setLoading(true);
    let data = {};
    if (name && email && subject) {
      if (name) data.name = name;
      if (email) data.email = email;
      if (subject) data.subject = subject;
      if (message) data.message = message;
      axios
        .post("http://www.weboverflow.ir/contacts/create/", data)
        .then((res) => {
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };
  return (
    <div className="container">
      <h1>We Can’t Wait to Meet You!</h1>
      <p className="my-4">
        Interested in seeing how we can help you? Great, fill out the form below
        or call 281.782.9819 and we can get started.
      </p>
      <p className="my-4">We’re looking forward to hearing from you.</p>
      <div className="w-100 d-flex align-items-center justify-content-center mt-4">
        <input
          className="w-100 d-flex form-control me-md-4"
          placeholder="full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-100 d-flex form-control"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="w-100 d-flex align-items-center justify-content-center mt-4">
        <input
          className="w-100 d-flex form-control"
          placeholder="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="w-100 d-flex align-items-center justify-content-center mt-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-100 d-flex form-control"
          placeholder="message"
        />
      </div>
      <div className="w-100 d-flex align-items-center justify-content-start mt-3">
        {!loading ? (
          <button onClick={contactUsHandler} className="btn btn-success">
            Send
          </button>
        ) : (
          <div class="spinner-grow text-dark" role="status">
            <span class="sr-only"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
