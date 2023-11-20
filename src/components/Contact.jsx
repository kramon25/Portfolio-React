import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_gxxztjs";
    const templateId = "template_tpolj3a";
    const publicKey = "03fjHnAEKQeWrjjSK";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Kenny",
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      function (response) {
        console.log("Email sent successfully!", response);
        alert("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Email was unsuccessful");
      }
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <div className="sectionheader">
        {" "}
        <h1>CONTACT ME</h1>
      </div>
      <article>
        <label htmlFor="checkcontact" className="contactbutton">
          <div className="mail"></div>
        </label>
        <input id="checkcontact" type="checkbox" />
        <form
          action=""
          method="post"
          className="contactform"
          onSubmit={handleSubmit}
        >
          <p className="input_wrapper">
            <input
              type="text"
              placeholder="Your Name"
              required="required"
              name="contact_nom"
              id="contact_nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </p>
          <p className="input_wrapper">
            <input
              type="text"
              placeholder="Your Email"
              name="contact_email"
              id="contact_email"
              required="required"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p className="textarea_wrapper">
            <textarea
              cols="30"
              rows="10"
              name="contact_message"
              id="contact_message"
              required="required"
              placeholder="Please enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </p>
          <p className="submit_wrapper">
            <button type="sumbit" className="contactbutton">
              Send
            </button>
          </p>
        </form>
      </article>
    </section>
  );
};

export default Contact;
