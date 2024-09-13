import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function SignUpForm() {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),

    fullName: Yup.string().required("Full name is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSignUp = async (body) => {
    try {
      const signup = await axios.post(
        "http://localhost:3000/api/register",
        body
      );

      if (signup.data.message === "New User Created") {
        toast.success("User Registeration Successfull, please login");
      }
    } catch (error) {
      console.log("error during signup", error);

      if (
        error.response.data.message === "User with this email already exists" &&
        error.status === 409
      ) {
        toast.error("User with this email already exists");
      } else {
        toast.error("Something Went Wrong, try again");
      }
    }
  };

  return (
    <div className="form-container">
      <Toaster position="top-right" reverseOrder={false} />
      <Formik
        initialValues={{
          email: "",
          password: "",
          fullName: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSignUp(values);
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

            <label htmlFor="fullName" className="form-label">
              Your Full Name
            </label>
            <Field
              type="text"
              name="fullName"
              id="fullName"
              className={`form-input ${
                errors.fullName && touched.fullName ? "input-error" : ""
              }`}
              placeholder="Enter your Full Name"
            />
            {errors.fullName && touched.fullName ? (
              <p className="error">{errors.fullName}</p>
            ) : null}

            <label htmlFor="password" className="form-label">
              Password
            </label>
            <Field
              type="password"
              name="password"
              id="password"
              className={`form-input ${
                errors.password && touched.password ? "input-error" : ""
              }`}
              placeholder="Enter your Password"
            />
            {errors.password && touched.password ? (
              <p className="error">{errors.password}</p>
            ) : null}

            <label htmlFor="confirmPassword" className="form-label">
              Confirm Your Password
            </label>
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className={`form-input ${
                errors.confirmPassword && touched.confirmPassword
                  ? "input-error"
                  : ""
              }`}
              placeholder="Enter Your Password Again"
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <p className="error">{errors.confirmPassword}</p>
            ) : null}

            <button type="submit" className="btn loginbtn">
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUpForm;
