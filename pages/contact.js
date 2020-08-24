import { useState } from "react";
import Layout from "../src/components/layouts/Layout";
import styles from "./contact.module.scss";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = `?subject=[${firstName} ${lastName}] ${subject}&body=${body}`;
    location.href = `mailto:johnrubio93@gmail.com${query}`;
    resetForm();
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setSubject("");
    setBody("");
  };

  return (
    <Layout title="Contact">
      <div className={styles.contact}>
        <div>
          <h2>Send an Email</h2>
          <p>Feel free to contact me, my Email address is:</p>
          <p className={styles.emailAddress}>johnrubio93@gmail.com</p>
          <p>
            You can use the form below to pre-fill your default Email client.
          </p>

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={() => setFirstName(event.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={() => setLastName(event.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={() => setSubject(event.target.value)}
            />
            <textarea
              placeholder="What is on your mind?"
              value={body}
              onChange={() => setBody(event.target.value)}
            />
            <input
              className={styles.submit}
              type="submit"
              value="Create Email"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
}
