import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./App.css";

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .matches(/regex@gmail\.com$/, 'Email must be "regex@gmail.com"')
    .required("Email is required"),
  pass: Yup.string()
    .oneOf(["rishiMe@199"], 'Password must be "rishiMe@199"')
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
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isValid,
              dirty,
            }) => (
              <form className="register-form" onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    className="form-input"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.name && errors.name && (
                    <div className="error-message">{errors.name}</div>
                  )}
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    className="form-input"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && (
                    <div className="error-message">{errors.email}</div>
                  )}
                </div>

                {/* Password Field */}
                <div className="form-group">
                  <label htmlFor="pass">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    placeholder="Password"
                    className="form-input"
                    value={values.pass}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.pass && errors.pass && (
                    <div className="error-message">{errors.pass}</div>
                  )}
                </div>

                {/* Confirm Password Field */}
                <div className="form-group">
                  <label htmlFor="re_pass">
                    <i className="zmdi zmdi-lock-outline"></i>
                  </label>
                  <input
                    type="password"
                    name="re_pass"
                    id="re_pass"
                    placeholder="Confirm your Password"
                    className="form-input"
                    value={values.re_pass}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.re_pass && errors.re_pass && (
                    <div className="error-message">{errors.re_pass}</div>
                  )}
                </div>

                {/* Terms Checkbox */}
                <div className="form-group">
                  <input
                    type="checkbox"
                    name="agreeTerm"
                    id="agree-term"
                    className="agree-term"
                    value={values.agreeTerm}
                    onChange={handleChange}
                  />
                  <label htmlFor="agree-term" className="label-agree-term">
                    I agree to all statements in the{" "}
                    
                      Terms of Service
                    </a>
                  </label>
                  {touched.agreeTerm && errors.agreeTerm && (
                    <div className="error-message">{errors.agreeTerm}</div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="form-group form-button">
                  <button
                    type="submit"
                    className="form-submit"
                    disabled={!(dirty && isValid)}
                  >
                    Register
                  </button>
                </div>
              </form>
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
