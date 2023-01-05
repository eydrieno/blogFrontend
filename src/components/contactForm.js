import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/contactForm.module.scss";

function ContactForm() {
  const form = useRef();

  const [isSent, setIsSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        "service_bhf4n48",
        "template_0he6ctu",
        form.current,
        "JX7-K0iT08eYT0PcU"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setSending(false);
        },
        (error) => {
          console.log(error.text);
          setError(true);
          setSending(false);
        }
      );
  };

  return (
    <div className={styles.wrapper}>
      <h1>Contact TravelSquad</h1>
      <div className={styles.formContainer}>
        <form ref={form} onSubmit={sendEmail}>
          <label className={styles.firstLabel}>Your name</label>
          <input type="text" name="from_name" required />
          <label>Your email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" rows="7" required />
          <input
            className={styles.sendButton}
            type="submit"
            value={sending ? "Sending..." : "Send"}
          />
          <div className={styles.sentMessage}>
            {isSent
              ? "Your message has been successfully sent! I will reply soon."
              : null}
          </div>
          <div className={styles.errorMessage}>
            {error ? "Oh no! Something went wrong. Please try later." : null}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
