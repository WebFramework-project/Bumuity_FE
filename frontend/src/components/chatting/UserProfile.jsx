import React from "react";
import "../../styles/UserProfile.css";

class UserProfile extends React.Component {
  render() {
    const { profileImage, name, title, showTitle, onToggleShowTitle } =
      this.props;

    return (
      <div className="user-profile">
        <img src={profileImage} alt="User" className="user-image" />
        <div className="user-details">
          <div className="user-name">{name}</div>
          {showTitle && <div className="user-title">{title}</div>}
        </div>
        <div className="toggle-switch">
          <label className="switch">
            <input
              type="checkbox"
              checked={showTitle}
              onChange={onToggleShowTitle}
            />
            <span className="slider round"></span>{" "}
          </label>
        </div>
      </div>
    );
  }
}

export default UserProfile;
