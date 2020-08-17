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
          <p>johnrubio93@gmail.com</p>
          <p>You can use the form below to pre-fill your Email.</p>

          <form onSubmit={handleSubmit}>
            <label>
              First Name:
              <input
                type="text"
                value={firstName}
                onChange={() => setFirstName(event.target.value)}
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                value={lastName}
                onChange={() => setLastName(event.target.value)}
              />
            </label>
            <label>
              Subject:
              <input
                type="text"
                value={subject}
                onChange={() => setSubject(event.target.value)}
              />
            </label>
            <label>
              Body:
              <textarea
                value={body}
                onChange={() => setBody(event.target.value)}
              />
            </label>
            <input type="submit" value="Create Email" />
          </form>
        </div>
      </div>
    </Layout>
  );
}
