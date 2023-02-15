import React, { useState } from "react";

const Worktogether = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [hearedAboutUs, setHearedAboutUs] = useState("");
  const [resume, setResume] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);

  const contactUsHandler = () => {
    setLoading(true);
    let data = {};
    if (name && email && subject) {
      if (name) data.name = name;
      if (email) data.email = email;
      if (companyName) data.company_name = companyName;
      if (phone) data.phone = phone;
      if (websiteUrl) data.website_url = websiteUrl;
      if (hearedAboutUs) data.heared_about_us = hearedAboutUs;
      if (resume) data.resume = resume;
      if (description) data.description = description;
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
      <div className="w-100 d-flex flex-column flex-md-row align-items-center justify-content-center mt-4">
        <input
          className="w-100 d-flex form-control me-md-4 mb-4 mb-md-0"
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
      <div className="w-100 d-flex flex-column flex-md-row align-items-center justify-content-center mt-4">
        <input
          className="w-100 d-flex form-control me-md-4 mb-4 mb-md-0"
          placeholder="company name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <input
          className="w-100 d-flex form-control"
          placeholder="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="w-100 d-flex flex-column flex-md-row align-items-center justify-content-center mt-4">
        <input
          className="w-100 d-flex form-control me-md-4 mb-4 mb-md-0"
          placeholder="website Url"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
        />
        <input
          className="w-100 d-flex form-control"
          placeholder="heared About Us"
          value={hearedAboutUs}
          onChange={(e) => setHearedAboutUs(e.target.value)}
        />
      </div>
      <div className="w-100 d-flex flex-column flex-md-row align-items-center justify-content-center mt-4">
        <input
          className="w-100 d-flex form-control me-md-4 mb-4 mb-md-0"
          placeholder="resume url link"
          value={resume}
          onChange={(e) => setResume(e.target.value)}
        />
        <input
          className="w-100 d-flex form-control"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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

export default Worktogether;
