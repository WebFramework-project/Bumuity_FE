import React from "react";
import ChatList from "../components/chatting/ChatList";
import ChatRoom from "../components/chatting/ChatRoom";
import UserProfile from "../components/chatting/UserProfile";
import "../styles/ChatComponent.css";

class ChatComponent extends React.Component {
  state = {
    selectedRoomId: null,
    showTitle: true,
  };

  handleSelectRoom = (roomId) => {
    this.setState({ selectedRoomId: roomId });
  };

  handleToggleShowTitle = () => {
    this.setState((prevState) => ({ showTitle: !prevState.showTitle }));
  };

  render() {
    const { selectedRoomId, showTitle } = this.state;
    const profileImage =
      "https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png";
    const userName = "김한성";
    const userTitle = "차장";

    return (
      <div className="chat-component">
        <div className="sidebar">
          <ChatList onSelectRoom={this.handleSelectRoom} />
          <UserProfile
            profileImage={profileImage}
            name={userName}
            title={userTitle}
            showTitle={showTitle}
            onToggleShowTitle={this.handleToggleShowTitle}
          />
        </div>
        <div className="main">
          {selectedRoomId && (
            <ChatRoom
              roomId={selectedRoomId}
              currentUser={{ name: userName, title: userTitle }}
            />
          )}
        </div>
      </div>
    );
  }
}

export default ChatComponent;
