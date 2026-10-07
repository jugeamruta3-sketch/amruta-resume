import { useState } from "react";
import SectionHeading from "../components/SectionHeading.jsx";

function Contact() {
  const [emailDraftReady, setEmailDraftReady] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nReply to: ${email}`);

    setEmailDraftReady(true);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  return (
    <section className="page-section section-wrap section-rule">
      <div className="contact-section contact-page">
        <div className="contact-intro">
          <SectionHeading eyebrow="Your next idea starts here">
            Let&apos;s make something meaningful.
          </SectionHeading>
          <p className="section-description">
            Have a project in mind, an opportunity to share, or simply want to
            say hello? I&apos;d love to hear from you.
          </p>
          <a className="contact-email" href="mailto:?subject=Hello%20Amruta">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Your name
            <input
              autoComplete="name"
              name="name"
              placeholder="What should I call you?"
              required
            />
          </label>
          <label>
            Your email
            <input
              autoComplete="email"
              name="email"
              placeholder="you@example.com"
              required
              type="email"
            />
          </label>
          <label>
            Your message
            <textarea
              name="message"
              placeholder="Tell me a little about it..."
              required
              rows="3"
            />
          </label>
          <button className="button button-primary contact-submit" type="submit">
            Prepare your message <span aria-hidden="true">↗</span>
          </button>
          <p className="form-note" aria-live="polite">
            {emailDraftReady
              ? "Your email app should open with the message ready to send."
              : "Opens your email app with your message ready to send."}
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
