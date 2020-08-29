import { useReducer } from "react";
import Layout from "../src/components/layouts/Layout";
import styles from "./contact.module.scss";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  subject: "",
  body: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateFieldValue":
      return { ...state, [action.field]: action.value };

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = `?subject=[${state.firstName} ${state.lastName}] ${state.subject}&body=${state.body}`;
    location.href = `mailto:johnrubio93@gmail.com${query}`;
    dispatch({ type: "reset" });
  };

  return (
    <Layout title="Contact">
      <div className={styles.contact}>
        <h2>Send an Email</h2>
        <p>Feel free to contact me, my Email address is:</p>
        <p className={styles.emailAddress}>johnrubio93@gmail.com</p>
        <p>You can use the form below to pre-fill your default Email client.</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="First Name"
              value={state.firstName}
              onChange={updateFieldValue("firstName")}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={state.lastName}
              onChange={updateFieldValue("lastName")}
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            value={state.subject}
            onChange={updateFieldValue("subject")}
          />
          <textarea
            placeholder="What is on your mind?"
            value={state.body}
            onChange={updateFieldValue("body")}
          />
          <input
            className={`forceColor ${styles.submit}`}
            type="submit"
            value="Create Email"
          />
        </form>
      </div>
    </Layout>
  );
}
