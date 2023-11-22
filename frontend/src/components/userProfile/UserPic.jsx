import React, { useState } from "react";
import iconImage from "../../images/start/profilesetIcon.png";

function UserPic({ onSelectImage, userImage }) {
  const [selectedProfileImage, setSelectedProfileImage] = useState(userImage);

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const maxWidth = 10.5 * 16; // 최대 가로 -> rem 픽셀로 변경
          const maxHeight = 9.75 * 16; // 최대 세로도 변경
          let width = img.width;
          let height = img.height;

          if (width > maxWidth || height > maxHeight) {
            const ratio = Math.min(maxWidth / width, maxHeight / height);
            width *= ratio;
            height *= ratio;
          }

          const canvas = document.createElement("canvas"); //canvas API 사용
          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);

          const resizedImage = canvas.toDataURL("image/jpeg");
          setSelectedProfileImage(resizedImage);
          onSelectImage(resizedImage);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const containerStyle = {
    marginTop: "0.5rem",
    display: "flex",
    justifyContent: "center",
    marginBottom: "0.5rem",
    alignItems: "center",
  };

  const profilesetStyle = {
    backgroundImage: selectedProfileImage
      ? `url(${selectedProfileImage})`
      : "none",
    backgroundSize: "10.5rem 9.75rem", // '10.5rem 9.75rem' 등으로 설정하시면 됩니다.
    backgroundPosition: "center",
    width: "10.5rem",
    height: "9.75rem",
    flexShrink: "0",
    border: "1px solid #322275",
    background: "#0A0A14",
    borderRadius: "50%",
  };

  const iconStyle = {
    backgroundImage: `url(${iconImage})`,
    display: "relative",
    position: "absolute",
    width: "1.2rem",
    height: "1.2rem",
    marginTop: "8.2rem",
    marginLeft: "6rem",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <label>
        <input
          id="userimg"
          type="file"
          style={{ display: "none" }}
          onChange={handleProfileImageChange}
          accept="image/*"
        />
        <div style={profilesetStyle}></div>
      </label>
      <div style={iconStyle}></div>
    </div>
  );
}

export default UserPic;
