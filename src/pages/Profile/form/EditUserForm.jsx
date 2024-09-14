import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import ImageUpload from "../../../components/ImageUpload/ImageUpload";

import { useUserInfo } from "../../../../context/UserContext";

import axios from "axios";
import toast from "react-hot-toast";

const countWords = (str) =>
  str ? str.split(/\s+/).filter((word) => word.length > 0).length : 0;

function EditUserForm({ setModalOpen }) {
  const { userInfo, setUserInfo } = useUserInfo();

  const handleEditUser = async (values) => {
    try {
      const editUser = await axios.patch(
        "http://localhost:3000/api/editUser",
        values,
        {
          headers: {
            Authorization: `Bearer ${useUserInfo.token}`,
          },
        }
      );

      // console.log(editUser.data.data, "edit user response");

      if (editUser.data.message === "User edited successfully") {
        toast.success("User Edited Successfully");
        setUserInfo(editUser.data.data);
        setModalOpen(false);
      }
    } catch (error) {
      console.error("error updateding user", error);
      toast.error(error.message);
    }
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    city: Yup.string(),
    profession: Yup.string(),
    dateOfBirth: Yup.date().nullable(),
    contact: Yup.string()
      .matches(/^[0-9]{11}$/, "Phone number must be exactly 11 digits")
      .nullable(),
    summary: Yup.string().test(
      "word-count",
      "Summary must be under 50 words",
      (value) => countWords(value) <= 50
    ),
    profilePhoto: Yup.mixed().nullable(),
    galleryimgOne: Yup.mixed().nullable(),
    galleryimgTwo: Yup.mixed().nullable(),
  });

  const handleFormSubmit = (values) => {
    console.log("Form submitted with values:", values);
    handleEditUser(values);
  };

  return (
    <div>
      <Formik
        initialValues={{
          fullName: userInfo.fullName ? userInfo.fullName : "",
          userId: userInfo.userId,
          city: userInfo.city ? userInfo.city : "",
          profession: userInfo.profession ? userInfo.profession : "",
          dateOfBirth: userInfo.dateOfBirth ? userInfo.dateOfBirth : "",
          contact: userInfo.contact ? userInfo.contact : "",
          summary: userInfo.summary ? userInfo.summary : "",
          profilePhoto: userInfo.profilePhoto ? userInfo.profilePhoto : null,
          galleryImage1: userInfo.galleryImage1 ? userInfo.galleryImage1 : null,
          galleryImage2: userInfo.galleryImage2 ? userInfo.galleryImage2 : null,
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ errors, touched, handleSubmit, setFieldValue, values }) => (
          <>
            <Form>
              <div className="imagecomponent__wrapper">
                <ImageUpload
                  setFieldValue={setFieldValue}
                  initalImage={values.profilePhoto}
                  setFormikField={"profilePhoto"}
                />
                <ImageUpload
                  setFieldValue={setFieldValue}
                  initalImage={values.galleryImage1}
                  setFormikField={"galleryImage1"}
                />
                <ImageUpload
                  setFieldValue={setFieldValue}
                  initalImage={values.galleryImage2}
                  setFormikField={"galleryImage2"}
                />
              </div>
              <label htmlFor="fullName" className="form-label modal-label">
                Your FullName *
              </label>
              <Field
                type="text"
                name="fullName"
                id="fullName"
                className={`form-input modal-input ${
                  errors.fullName && touched.fullName ? "input-error" : ""
                }`}
                placeholder="Enter your FullName"
              />
              {errors.fullName && touched.fullName ? (
                <p className="error">{errors.fullName}</p>
              ) : null}

              <label htmlFor="city" className="form-label modal-label">
                Your City (optional)
              </label>
              <Field
                type="text"
                name="city"
                id="city"
                className={`form-input modal-input ${
                  errors.city && touched.city ? "input-error" : ""
                }`}
                placeholder="Enter your City"
              />
              {errors.city && touched.city ? (
                <p className="error">{errors.city}</p>
              ) : null}

              <label htmlFor="profession" className="form-label modal-label">
                Your Profession (optional)
              </label>
              <Field
                type="text"
                name="profession"
                id="profession"
                className={`form-input modal-input ${
                  errors.profession && touched.profession ? "input-error" : ""
                }`}
                placeholder="Enter your Profession"
              />
              {errors.profession && touched.profession ? (
                <p className="error">{errors.profession}</p>
              ) : null}

              <label htmlFor="dateOfBirth" className="form-label modal-label">
                Date of Birth (optional)
              </label>
              <Field
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                className={`form-input modal-input ${
                  errors.dateOfBirth && touched.dateOfBirth ? "input-error" : ""
                }`}
              />
              {errors.dateOfBirth && touched.dateOfBirth ? (
                <p className="error">{errors.dateOfBirth}</p>
              ) : null}

              <label htmlFor="contact" className="form-label modal-label">
                Contact/Phone Number (optional)
              </label>
              <Field
                type="text"
                name="contact"
                id="contact"
                className={`form-input modal-input ${
                  errors.contact && touched.contact ? "input-error" : ""
                }`}
                placeholder="Enter your Phone Number"
              />
              {errors.contact && touched.contact ? (
                <p className="error">{errors.contact}</p>
              ) : null}

              <label htmlFor="summary" className="form-label modal-label">
                Summary (optional)
              </label>
              <Field
                as="textarea"
                name="summary"
                id="summary"
                className={`form-input modal-input ${
                  errors.summary && touched.summary ? "input-error" : ""
                }`}
                placeholder="Write something about yourself (max 50 words)"
              />
              {errors.summary && touched.summary ? (
                <p className="error">{errors.summary}</p>
              ) : null}
            </Form>

            <div className="modalfooter">
              <button
                onClick={() => setModalOpen(false)}
                className="transparent__btn"
              >
                Close
              </button>

              <button
                type="button"
                className="transparent__btn savebtn"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
}

export default EditUserForm;
