import "./imageupload.css";
import { useRef, useState, useEffect } from "react";
import EditIcon from "../../Icons/Edit.icon";
import supabase from "../../../supabase";
import toast from "react-hot-toast";

function ImageUpload({ setFieldValue, initalImage, setFormikField }) {
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(initalImage);

  const handlePencilClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validTypes.includes(file.type)) {
        toast.error("Please upload an image file (jpeg, png, or gif)");
        fileInputRef.current.value = null;
        return;
      }

      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        fileInputRef.current.value = null;
        toast.error("File size must be less than 5 MB.");
        return;
      }

      const filePath = `images/${Date.now()}_${file.name}`;
      const { data, error } = await supabase.storage
        .from("UserData")
        .upload(filePath, file);

      if (error || !data) {
        toast.error(
          "Error uploading image: " + (error?.message || "unknown error")
        );
        return;
      }

      // Fetch the public URL
      const { data: urlData, error: urlError } = supabase.storage
        .from("UserData")
        .getPublicUrl(filePath);

      if (urlError || !urlData.publicUrl) {
        toast.error(
          "Error fetching public URL: " +
            (urlError?.message || "URL not available")
        );
        return;
      }

      const publicURL = urlData.publicUrl;

      console.log("Public URL:", publicURL); // Log for verification

      setFieldValue(setFormikField, publicURL);
      setPreviewImage(publicURL);
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
