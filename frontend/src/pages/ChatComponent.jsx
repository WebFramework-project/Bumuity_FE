import React from "react";
import ChatList from "../components/chatting/ChatList";
import ChatRoom from "../components/chatting/ChatRoom";
import UserProfile from "../components/chatting/UserProfile";
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import "../styles/ChatComponent.css";

class ChatComponent extends React.Component {
  state = {
    selectedRoomId: null,
    showTitle: true,
    sizes: [150, '30%', 'auto'],
  };

  handleSelectRoom = (roomId) => {
    this.setState({ selectedRoomId: roomId });
  };

  handleToggleShowTitle = () => {
    this.setState((prevState) => ({ showTitle: !prevState.showTitle }));
  };

  setSizes = (newSizes) => {
    this.setState({ sizes: newSizes });
  };

  render() {
    const { selectedRoomId, showTitle } = this.state;
    const profileImage =
      "https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png";
    const userName = "김한성";
    const userTitle = "차장";

    return (
      <div className="chat-component">
        <SplitPane split='vertical' sizes={this.state.sizes} onChange={this.setSizes}>
          <Pane className="sidebar" minSize={55} maxSize='50%'>
            <ChatList onSelectRoom={this.handleSelectRoom} selectedRoomId={selectedRoomId} />
            <UserProfile
              profileImage={profileImage}
              name={userName}
              title={userTitle}
              showTitle={showTitle}
              onToggleShowTitle={this.handleToggleShowTitle}
            />
          </Pane>
          <div className="main">
            {selectedRoomId && (
              <ChatRoom
                roomId={selectedRoomId}
                currentUser={{ name: userName, title: userTitle }}
              />
            )}
          </div>
        </SplitPane>
      </div>
    );
  }
}

export default ChatComponent;
