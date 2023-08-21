export const UploadImages = async (file) => {
  if (!file) throw new Error("No hay archivos para subir");
  const cloudUrl = "https://api.cloudinary.com/v1_1/drksbywie/upload";
  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });
    if (!resp.ok) throw new Error("Error subiendo los archivos");
    const cloudResp = resp.json();
    return cloudResp.secure_url;
  } catch (error: unknown) {
    console.log(error);
    throw new Error(error.message);
  }
};
