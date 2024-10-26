import { supabase } from "./index";

export const uploadImage = async (file) => {
  try {
    const fileName = `${Date.now()}_${file.name}`;

    const { data, error } = await supabase.storage
      .from("images")
      .upload(fileName, file);

    if (error) {
      throw error;
    }

    const { publicURL, error: urlError } = supabase.storage
      .from("images")
      .getPublicUrl(fileName);

    if (urlError) {
      throw urlError;
    }

    return publicURL;
  } catch (error) {
    console.error("Error uploading image:", error.message);
    return null;
  }
};
