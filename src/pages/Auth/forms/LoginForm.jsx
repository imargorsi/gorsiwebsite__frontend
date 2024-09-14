import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import { useNavigate } from "react-router-dom";

import { useUserInfo } from "../../../../context/UserContext";

function LoginForm() {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useUserInfo();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleLogin = async (body) => {
    try {
      const loginUser = await axios.post(
        "http://localhost:3000/api/login",
        body
      );

      if (loginUser.data.message === "Log in Successfully") {
        toast.success("Login Successfull");
        setUserInfo(loginUser.data.data.user);
        setTimeout(() => {
          navigate("/profile");
        }, 1200);
        // console.log(loginUser);
      }
    } catch (error) {
      console.error("error during login", error);

      if (
        error.status === 401 &&
        error.response.data.message === "Invalid email or password"
      ) {
        toast.error("Invalid Email or Password");
      } else {
        toast.error("Something Went Wrong, try again");
      }
    }
  };

  return (
    <div className="form-container ">
      <Toaster position="top-right" reverseOrder={false} />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleLogin(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="email" className="form-label auth_lable">
              Email
            </label>

            <Field
              type="email"
              id="email"
              name="email"
              className={`form-input auth_input ${
                errors.email && touched.email ? "input-error" : ""
              }`}
              placeholder="Enter your Email"
            />
            {errors.email && touched.email ? (
              <p className="error">{errors.email}</p>
            ) : null}

            <label htmlFor="password" className="form-label auth_lable">
              Password
            </label>

            <Field
              type="password"
              name="password"
              id="password"
              className={`form-input auth_input ${
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
