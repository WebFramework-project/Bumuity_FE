import React, { useState } from 'react';
import iconImage from '../../images/start/profilesetIcon.png';

function UserPic() {
    const [selectedProfileImage, setSelectedProfileImage] = useState(null);

    const handleProfileImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedProfileImage(reader.result);
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
        backgroundImage: `url(${selectedProfileImage})`,
        backgroundSize: "cover",
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
        display: 'relative',
        position: 'absolute',
        width: '1.2rem',
        height: '1.2rem',
        marginTop: '8.2rem',
        marginLeft: '6rem',
        cursor: 'pointer',
    };

    return (
        <div style={containerStyle}>
            <label>
                <input id="userimg" type="file" style={{ display: 'none' }} onChange={handleProfileImageChange} accept="image/*" />
                <div style={profilesetStyle}></div>
            </label>
            <div style={iconStyle}></div>
        </div>
    );
}

export default UserPic;
