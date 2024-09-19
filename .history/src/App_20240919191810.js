import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./App.css"; // Assuming you'll add some CSS for styling

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .matches(/^regex@gmail\.com$/, "Email must be regex@gmail.com")
    .required("Email is required"),
  password: Yup.string()
    .matches(/^r__M_9/, 'Password must start with "r__M_9"')
    .min(6, "Password must be at least 6 characters") // Ensuring minimal length of 6
    .required("Password is required"),
});

const App = () => {
  return (
    <div className="app-container">
      <h1>Login Form</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form Submitted", values);
        }}
      >
        {({ isValid }) => (
          <Form className="form-container">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Enter regex@gmail.com"
                className="form-input"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password must start with 'r__M_9'"
                className="form-input"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="submit-button"
                disabled={!isValid}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
