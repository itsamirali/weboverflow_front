import React from "react";

const contact = () => {
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
        />
        <input className="w-100 d-flex form-control" placeholder="email" />
      </div>
      <div className="w-100 d-flex align-items-center justify-content-center mt-4">
        <input className="w-100 d-flex form-control" placeholder="subject" />
      </div>
      <div className="w-100 d-flex align-items-center justify-content-center mt-4">
        <textarea className="w-100 d-flex form-control" placeholder="message" />
      </div>
      <div className="w-100 d-flex align-items-center justify-content-start mt-3">
        <button className="btn btn-success">Send</button>
      </div>
    </div>
  );
};

export default contact;
