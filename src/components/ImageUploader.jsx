import React from 'react';

const ImageUploader = ({ handleImageUpload, selectedImage }) => {
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && <img src={selectedImage} alt="Uploaded" />}
    </div>
  );
};

export default ImageUploader;