import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import ImageUpload from "../../../components/ImageUpload/ImageUpload";

const countWords = (str) =>
  str ? str.split(/\s+/).filter((word) => word.length > 0).length : 0;

function EditUserForm({ setModalOpen }) {
  const validationSchema = Yup.object({
    name: Yup.string().required("Full name is required"),
    city: Yup.string(),
    profession: Yup.string(),
    dob: Yup.date().nullable(),
    phone: Yup.string()
      .matches(/^[0-9]{11}$/, "Phone number must be exactly 11 digits")
      .nullable(),
    summary: Yup.string().test(
      "word-count",
      "Summary must be under 50 words",
      (value) => countWords(value) <= 50
    ),
    profilephoto: Yup.mixed().nullable(),
    galleryimgOne: Yup.mixed().nullable(),
    galleryimgTwo: Yup.mixed().nullable(),
  });

  const handleFormSubmit = (values) => {
    console.log("Form submitted with values:", values);
    setModalOpen(false);
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          city: "",
          profession: "",
          dob: "",
          phone: "",
          summary: "",
          profilephoto: null,
          galleryimgOne: null,
          galleryimgTwo: null,
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
                  initalImage={values.profilephoto}
                  setFormikField={"profilephoto"}
                />
                <ImageUpload
                  setFieldValue={setFieldValue}
                  initalImage={values.galleryimgOne}
                  setFormikField={"galleryimgOne"}
                />
                <ImageUpload
                  setFieldValue={setFieldValue}
                  initalImage={values.galleryimgTwo}
                  setFormikField={"galleryimgTwo"}
                />
              </div>
              <label htmlFor="name" className="form-label modal-label">
                Your FullName *
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className={`form-input modal-input ${
                  errors.name && touched.name ? "input-error" : ""
                }`}
                placeholder="Enter your FullName"
              />
              {errors.name && touched.name ? (
                <p className="error">{errors.name}</p>
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

              <label htmlFor="dob" className="form-label modal-label">
                Date of Birth (optional)
              </label>
              <Field
                type="date"
                name="dob"
                id="dob"
                className={`form-input modal-input ${
                  errors.dob && touched.dob ? "input-error" : ""
                }`}
              />
              {errors.dob && touched.dob ? (
                <p className="error">{errors.dob}</p>
              ) : null}

              <label htmlFor="phone" className="form-label modal-label">
                Contact/Phone Number (optional)
              </label>
              <Field
                type="text"
                name="phone"
                id="phone"
                className={`form-input modal-input ${
                  errors.phone && touched.phone ? "input-error" : ""
                }`}
                placeholder="Enter your Phone Number"
              />
              {errors.phone && touched.phone ? (
                <p className="error">{errors.phone}</p>
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
