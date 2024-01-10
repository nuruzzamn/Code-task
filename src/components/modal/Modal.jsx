import React, { useState } from "react";

const Modal = ({ isOpen }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...selectedImages]);
  };

  const handleClose = () => {
    setIsVisible(false);
    isOpen();
  };

  const handleUpload = async () => {
    const apiUrl = "https://upload.imagekit.io/api/v1/files/upload";

    const formData = new FormData();
    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Upload successful");
      } else {
        console.error("Upload failed");
      }
    } catch (error) {
      console.error("Error during upload", error);
    }
    setIsVisible(false);
  };

  return (
    <div className="flex justify-center items-center h-screen rounded">
      {isVisible && (
        <div className="min-w-fit w-1/5 h-fit bg-slate-300 p-3">
          <div className="flex justify-between items-center mb-3">
            <p className="text-lg font-semibold">File upload</p>
            <span>
              <button
                className="text-gray-600 hover:text-gray-800 text-xl p-2"
                onClick={handleClose}
              >
                &times;
              </button>
            </span>
          </div>

          <hr />

          <div className="p-4 mb-3">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
          </div>

          {images.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-2">Selected Images:</h2>
              <ul className="list-disc pl-6">
                {images.map((image, index) => (
                  <li key={index} className="mb-1">
                    {image.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <hr />

          <div className="border-t px-4 py-2 flex justify-end ">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleUpload}
            >
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
