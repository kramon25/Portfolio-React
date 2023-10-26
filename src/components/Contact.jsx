export default function Contact() {
  return (
    <section id="contact">
      <div className="sectionheader">
        {" "}
        <h1>CONTACT</h1>
      </div>
      <article>
        <p>Email Me </p>

        <label htmlFor="checkcontact" className="contactbutton">
          <div className="mail"></div>
        </label>
        <input id="checkcontact" type="checkbox" />

        <form action="" method="post" className="contactform">
          <p className="input_wrapper">
            <input
              type="input"
              name="contact_nom"
              id="contact_nom"
              required="required"
              placeholder="Please enter your name"
            />
            <label htmlFor="contact_nom">NAME</label>
          </p>
          <p className="input_wrapper">
            <input
              type="input"
              name="contact_email"
              id="contact_email"
              required="required"
              placeholder="Please enter your email"
            ></input>
            <label htmlFor="contact_email">EMAIL</label>
          </p>
          <p className="input_wrapper">
            <input
              type="input"
              name="contact_sujet"
              id="contact_sujet"
              placeholder="Optional"
            />
            <label htmlFor="contact_sujet">SUBJECT</label>
          </p>
          <p className="textarea_wrapper">
            <textarea
              name="contact_message"
              id="contact_message"
              required="required"
              placeholder="Please enter your message"
            ></textarea>
          </p>
          <p className="submit_wrapper">
            <input type="submit" value="ENVOYER" />
          </p>
        </form>
      </article>
    </section>
  );
}
