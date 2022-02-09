import { useReducer } from "react";
import Layout from "../src/components/layouts/Layout";
import Loader from "../src/components/Loader";
import styles from "./contact.module.scss";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  body: "",
  status: "IDLE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateFieldValue":
      return { ...state, [action.field]: action.value };

    case "updateStatus":
      return { ...state, status: action.status };

    case "reset":
    default:
      return INITIAL_STATE;
  }
};

export default function Contact() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const updateFieldValue = (field) => (event) => {
    dispatch({
      type: "updateFieldValue",
      field,
      value: event.target.value,
    });
  };

  const setStatus = (status) => dispatch({ type: "updateStatus", status });

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("PENDING");

    fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(state),
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        setStatus("SUCCESS");
      })
      .catch((err) => {
        console.error(err);
        setStatus("ERROR");
      });
  };

  return (
    <Layout title="Contact">
      <div className={styles.contact}>
        <h2>Send an Email</h2>
        <p>Feel free to contact me, my Email address is:</p>
        <p className={styles.emailAddress}>johnrubio93@gmail.com</p>
        <p>Or you can use the form below to send a message.</p>

        <div className={styles.formWrapper}>
          {state.status != "IDLE" && (
            <div className={styles.loaderWrapper}>
              {state.status == "PENDING" && <Loader />}
              {state.status == "SUCCESS" && (
                <>
                  <p>Message Sent!</p>
                  <button onClick={() => dispatch({ type: "reset" })}>
                    OK
                  </button>
                </>
              )}
              {state.status == "ERROR" && (
                <>
                  <p>Something went wrong. Please try again.</p>
                  <button onClick={() => setStatus("IDLE")}>Back</button>
                </>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="First Name"
                required
                value={state.firstName}
                onChange={updateFieldValue("firstName")}
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                value={state.lastName}
                onChange={updateFieldValue("lastName")}
              />
            </div>
            <input
              type="email"
              placeholder="Your@email.com"
              required
              value={state.email}
              onChange={updateFieldValue("email")}
            />
            <input
              type="text"
              placeholder="Subject"
              required
              value={state.subject}
              onChange={updateFieldValue("subject")}
            />
            <textarea
              placeholder="What is on your mind?"
              required
              value={state.body}
              onChange={updateFieldValue("body")}
            />
            <button type="submit" className={styles.submit}>
              Message
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
