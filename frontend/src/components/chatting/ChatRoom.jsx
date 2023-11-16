import React, { useState, useEffect, useRef } from "react";
import { MessageBox, Input, Button } from "react-chat-elements";
import ScrollToBottom from "react-scroll-to-bottom";
import "../../styles/ChatRoom.css";

const ChatRoom = ({ roomId, currentUser }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "김김김",
      title: "사장",
      text: "오늘 저녁은 뭘 먹을지 회의를 시작해보지",
      time: new Date(2023, 10, 12, 12, 0),
    },
    {
      id: 2,
      name: "이이이",
      title: "상무",
      text: "돈까스만 아니면 될 것 같습니다.",
      time: new Date(2023, 10, 12, 12, 5),
    },
    {
      id: 3,
      name: "박박박",
      title: "",
      text: "그럼 카레로 하죠",
      time: new Date(2023, 10, 12, 12, 10),
    },
    {
      id: 4,
      name: currentUser.name,
      title: currentUser.title,
      text: "좋습니다.",
      time: new Date(2023, 10, 12, 12, 15),
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      const newMessageObj = {
        id: messages.length + 1,
        name: currentUser.name,
        title: currentUser.title,
        text: newMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        user: true,
      };
      setMessages([...messages, newMessageObj]);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-room">
      <ScrollToBottom className="messages-container">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${
              message.name === currentUser.name ? "user" : "other"
            }`}
          >
            {message.name !== currentUser.name && (
              <div className="message-sender-info">
                <img
                  src="https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png"
                  alt={`${message.name}`}
                  className="message-sender-image"
                />
                <span className="message-sender-name">{message.name}</span>
                {message.title && (
                  <span className="message-sender-title">{message.title}</span>
                )}
              </div>
            )}
            {message.name === currentUser.name && (
              <div className="message-sender-info">
                <span className="message-sender-name">&nbsp;</span>
                {message.title && (
                  <span className="message-sender-title">&nbsp;</span>
                )}
              </div>
            )}
            <MessageBox
              style={{
                backgroundColor:
                  message.name === currentUser.name ? "blue" : "white",
                color: message.name === currentUser.name ? "white" : "black", // 텍스트 색상도 조절할 수 있습니다.
              }}
              position={message.name === currentUser.name ? "right" : "left"}
              type={"text"}
              text={message.text}
              date={message.time}
            />
          </div>
        ))}
        <div ref={messagesEndRef}/>
      </ScrollToBottom>
      <div className="message-input-container">
        <Input
          id="chattingInput"
          placeholder="메시지를 입력하세요"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          rightButtons={
            <Button
              color="white"
              backgroundColor="blue"
              text="전송"
              onClick={sendMessage}
            />
          }
        />
      </div>
    </div>
  );
};

export default ChatRoom;