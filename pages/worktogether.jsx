import React from "react";

const worktogether = () => {
  return (
    <div className="container">
      <h1>We would love to hear from you.</h1>
      <p className="my-4">
        To request a quote for your project, fill out the form below, and we
        will schedule your free project consultation. Don’t worry, your
        information is safe with us, and we will not share it with anyone.
      </p>
      <p className="my-4">
        Please provide as much detail as possible about your project. This will
        lead to a more productive initial phone call and or meeting.
      </p>
      <strong>Thanks and talk to you soon.</strong>
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

export default worktogether;
