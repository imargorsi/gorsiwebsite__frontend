import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function LoginForm() {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <div className="form-container">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="email" className="form-label">
              Email
            </label>

            <Field
              type="email"
              id="email"
              name="email"
              className={`form-input ${
                errors.email && touched.email ? "input-error" : ""
              }`}
              placeholder="Enter your Email"
            />
            {errors.email && touched.email ? (
              <p className="error">{errors.email}</p>
            ) : null}

            <label htmlFor="password" className="form-label">
              Password
            </label>

            <Field
              type="password"
              name="password"
              id="password"
              className={`form-input ${
                errors.email && touched.email ? "input-error" : ""
              }`}
              placeholder="Enter your Password"
            />
            {errors.password && touched.password ? (
              <p className="error">{errors.password}</p>
            ) : null}

            <p className="forgot-password paragraph">Forgot Password?</p>

            <button type="submit" className="btn loginbtn">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
