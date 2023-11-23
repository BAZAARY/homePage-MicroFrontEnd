import React, { useState } from 'react';

function ProfilePicture() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  const photoPath = `${process.env.PUBLIC_URL}/default.png`;

  return (
    <div className="text-center mx-5">
      <label htmlFor="profile-picture" className="cursor-pointer">
        {selectedFile ? (
          <img
            src={selectedFile}
            alt="Foto de perfil"
            className="w-20 h-20 rounded-full mx-auto"
          />
        ) : (
          <img
            src={photoPath}
            alt="Foto de perfil por defecto"
            className="w-20 h-20 rounded-full mx-auto"
          />
        )}
      </label>
      <input
        type="file"
        accept="image/*"
        id="profile-picture"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}

export default ProfilePicture;