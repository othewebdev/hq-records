import React, { useState } from "react";
import { Formik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "@/styles/ContactForm.module.css";
import Button from "./Button";

const ContactForm = () => {
  const [showRecaptcha, setShowRecaptcha] = useState(false);
  return (
    // Copy and pasted form below from Formik
    // Change to Contact Form, Configure and Style :)
    <div className={styles.outer}>
      <div className={styles.inner}>
        <Formik
          initialValues={{ email: "", password: "", message: "", subject: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "A valid email is required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.subject) {
              errors.subject = "A valid subject is required";
            }
            if (!values.message) {
              errors.message = "A valid message is required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <p style={{ color: "red" }}>
                {errors.email && touched.email && errors.email}
              </p>
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subject}
              />
              <p style={{ color: "red" }}>
                {errors.subject && touched.subject && errors.subject}
              </p>
              <label>Message</label>
              <textarea
                type="text"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              <p style={{ color: "red" }}>
                {errors.message && touched.message && errors.message}
              </p>
              <div>
                <p>Please verify ReCAPTCHA below:</p>
                <ReCAPTCHA
                  sitekey="6LcBC50kAAAAAE1lXSnjk9oSFyxaRxxwtiEe-LeW"
                  render="explicit"
                  theme="light"
                  verifyCallback={(response) => {
                    setFieldValue("recaptcha", response);
                  }}
                  onloadCallback={() => {
                    setShowRecaptcha(true);
                  }}
                />
                {errors.recaptcha && touched.recaptcha && (
                  <p>{errors.recaptcha}</p>
                )}
              </div>
              <Button
                text="submit"
                disabled={isSubmitting}
                type="submit"
                secondary
              />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
