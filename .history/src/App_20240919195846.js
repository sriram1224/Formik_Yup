import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./App.css";

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .matches(/regex@gmail\.com$/, 'Email must be "regex@gmail.com"')
    .required("Email is required"),
  pass: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  re_pass: Yup.string()
    .oneOf([Yup.ref("pass")], "Passwords must match")
    .required("Confirm your password"),
  agreeTerm: Yup.bool().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

const App = () => {
  return (
    <div className="signup-content">
      <div className="signup-form">
        <h2 className="form-title">Sign Up</h2>
        <div className="norm">
          <Formik
            initialValues={{
              name: "",
              email: "",
              pass: "",
              re_pass: "",
              agreeTerm: false,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log("Form Submitted:", values);
            }}
          >
            {({ isValid, dirty }) => (
              <Form className="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    className="form-input"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    className="form-input"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="pass">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <Field
                    type="password"
                    name="pass"
                    id="pass"
                    placeholder="Password"
                    className="form-input"
                  />
                  <ErrorMessage
                    name="pass"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="re_pass">
                    <i className="zmdi zmdi-lock-outline"></i>
                  </label>
                  <Field
                    type="password"
                    name="re_pass"
                    id="re_pass"
                    placeholder="Confirm your Password"
                    className="form-input"
                  />
                  <ErrorMessage
                    name="re_pass"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-group">
                  <Field
                    type="checkbox"
                    name="agreeTerm"
                    id="agree-term"
                    className="agree-term"
                  />
                  <label htmlFor="agree-term" className="label-agree-term">
                    <span>
                      <span></span>
                    </span>
                    I agree to all statements in the{" "}
                    <a href="#" className="term-service">
                      Terms of Service
                    </a>
                  </label>
                  <ErrorMessage
                    name="agreeTerm"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-group form-button">
                  <button
                    type="submit"
                    className="form-submit"
                    disabled={!(dirty && isValid)}
                  >
                    Register
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <div className="signup-image">
            <figure>
              <img
                src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg"
                alt="Sign up"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
