export default function Contact() {
  return (
    <div className="container-fluid tm-mt-60">
      <div className="row tm-mb-50">
        <div className="col-lg-4 col-12 mb-5">
          <h2 className="tm-text-primary mb-5">Contact Me</h2>
          <form
            id="contact-form"
            action=""
            method="POST"
            className="tm-contact-form mx-auto"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control rounded-0"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control rounded-0"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <select
                className="form-control"
                id="contact-select"
                name="inquiry"
              >
                <option value="-">Subject</option>
                <option value="front">Front End</option>
                <option value="back">Back End</option>
                <option value="fullstack">Fullstack</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                rows="8"
                name="message"
                className="form-control rounded-0"
                placeholder="Message"
                required=""
              ></textarea>
            </div>

            <div className="form-group tm-text-right">
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
