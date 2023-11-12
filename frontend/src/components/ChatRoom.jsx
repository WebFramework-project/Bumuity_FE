import React, { useState, useEffect, useRef } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "../styles/ChatRoom.css";

const ChatRoom = ({ roomId, currentUser }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "김김김",
      title: "사장",
      text: "오늘 저녁은 뭘 먹을지 회의를 시작해보지",
      time: "18:00",
      user: false,
    },
    {
      id: 2,
      name: "이이이",
      title: "상무",
      text: "돈까스만 아니면 될 것 같습니다.",
      time: "18:05",
      user: false,
    },
    {
      id: 3,
      name: "박박박",
      title: "",
      text: "그럼 카레로 하죠",
      time: "18:10",
      user: false,
    },
    {
      id: 4,
      name: currentUser.name,
      title: currentUser.title,
      text: "좋습니다.",
      time: "18:15",
      user: true,
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

  const sortedMessages = messages.sort((a, b) => a.time.localeCompare(b.time));

  return (
    <div className="chat-room">
      <ScrollToBottom className="messages-container">
        {sortedMessages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.user ? "user" : "other"}`}
          >
            {!message.user && (
              <div className="message-header">
                <img
                  src="https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png"
                  alt={`${message.name}`}
                  className="message-image"
                />
                <span className="message-name">{message.name}</span>
                {message.title && (
                  <span className="message-title">{message.title}</span>
                )}
              </div>
            )}
            <div className={`message-content ${message.user ? "user" : ""}`}>
              <div className="message-bubble">
                <div className="message-text">{message.text}</div>
              </div>
              <span className="message-time">{message.time}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </ScrollToBottom>
      <div className="message-input-container">
        <input
          type="text"
          className="message-input"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="메시지를 입력하세요"
        />
        <button onClick={sendMessage} className="send-message-button">
          전송
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;