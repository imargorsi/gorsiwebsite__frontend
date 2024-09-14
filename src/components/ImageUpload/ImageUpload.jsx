import "./imageupload.css";

import { useRef, useState, useEffect } from "react";
import EditIcon from "../../Icons/Edit.icon";

import toast, { Toaster } from "react-hot-toast";

function ImageUpload({ setFieldValue, initalImage, setFormikField }) {
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(initalImage);

  const handlePencilClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validTypes.includes(file.type)) {
        toast.error("Please upload an image file (jpeg or png) ");

        fileInputRef.current.value = null;
        return;
      }

      // Validate file size (max 5 MB)
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        fileInputRef.current.value = null;
        toast.error("File size must be less than 5 MB.");
        return;
      }

      setFieldValue(setFormikField, file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (typeof initalImage === "string") {
      setPreviewImage(initalImage);
    }
  }, [initalImage]);

  return (
    <div className="imgform__wrapper">
      <img
        className="form__profileimg"
        src={previewImage || "/default.jpg"}
        alt="Profile"
      />
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <span className="pencil-icon" onClick={handlePencilClick}>
        <EditIcon style={{ width: "2rem" }} />
      </span>
    </div>
  );
}

export default ImageUpload;
