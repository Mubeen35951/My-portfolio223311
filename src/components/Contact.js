import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [result, setResult] = useState("");
  const [messageType, setMessageType] = useState(""); // For message type (success/error)
  const [isFormValid, setIsFormValid] = useState(true); // For form validation (empty field check)

  const onSubmit = async (event) => {
    event.preventDefault();
    
    // Check if any field is empty
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    if (!name || !email || !phone || !message) {
      setResult("Please fill all the fields.");
      setMessageType("error");
      setIsFormValid(false);
      return;
    }

    setResult("Sending....");
    setMessageType(""); // Reset message type before submission
    setIsFormValid(true); // Reset form validity

    const formData = new FormData(form);
    formData.append("access_key", "88078983-ac85-4923-9f4a-1fd0f3a04b96");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setMessageType("success");
      form.reset();

      // Hide the notification after 5 seconds
      setTimeout(() => {
        setResult("");
      }, 3000);
    } else {
      console.log("Error", data);
      setResult(data.message);
      setMessageType("error");
    }
  };

  return (
    <>
      <div className="contact">
        <div className="home-about">
          <div className="breadcrumb">
            <Link to="/" className="home-link">
              Home
            </Link>{" "}
            &gt; Contact
          </div>
          <h2 className="contact-title">Contact Form</h2>
        </div>

        <form onSubmit={onSubmit}>
          <div className="contact-title2">
            <h2 className="contact-title">Talk To Us</h2>
          </div>

          {/* Display notification under Talk To Us heading */}
          {result && (
            <div
              className={`message ${messageType === "success" ? "success" : "error"}`}
            >
              {result}
            </div>
          )}

          <label>Name:</label>
          <input type="text" name="name" />
          <label>Email:</label>
          <input type="email" name="email"  />
          <label>Phone:</label>
          <input type="number" name="phone" />
          <label>Message:</label>
          <textarea name="message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
