import React, { useState, useEffect, useRef } from "react";
import { MessageBox, Input, Button } from "react-chat-elements";
import ScrollToBottom from "react-scroll-to-bottom";
import "../../styles/ChatRoom.css";

const ChatRoom = ({ roomId, currentUser }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      chatRoomId: 1,
      name: "이재용",
      title: "회장",
      text: "오늘 저녁은 뭘 먹을지 회의를 시작해보지",
      time: new Date(2023, 10, 15, 12, 0),
    },
    {
      id: 2,
      chatRoomId: 4,
      name: "이해진",
      title: "대표",
      text: "다들 네이버페이 쓰자~",
      time: new Date(2023, 10, 15, 9, 0),
    },
    {
      id: 3,
      chatRoomId: 2,
      name: "최부기",
      title: "이사",
      text: "내일 회식은 롯데리아에서 하겠습니다.",
      time: new Date(2023, 10, 15, 3, 0),
    },
    {
      id: 4,
      chatRoomId: 1,
      name: "이한성",
      title: "상무",
      text: "돈까스만 아니면 될 것 같습니다.",
      time: new Date(2023, 10, 15, 12, 5),
    },
    {
      id: 5,
      chatRoomId: 4,
      name: currentUser.name,
      title: currentUser.title,
      text: "넵",
      time: new Date(2023, 10, 15, 9, 2),
    },
    {
      id: 6,
      chatRoomId: 1,
      name: "박상상",
      title: "",
      text: "그럼 카레로 하죠",
      time: new Date(2023, 10, 15, 12, 10),
    },
    {
      id: 7,
      chatRoomId: 3,
      name: "이승건",
      title: "대표",
      text: "토스 짱짱",
      time: new Date(2023, 10, 15, 10, 0),
    },
    {
      id: 8,
      chatRoomId: 2,
      name: "김범수",
      title: "사장",
      text: "누가 새벽 3시에 카톡을 보내냐",
      time: new Date(2023, 10, 15, 3, 5),
    },
    {
      id: 9,
      chatRoomId: 3,
      name: currentUser.name,
      title: currentUser.title,
      text: "토스 짱짱짱!!",
      time: new Date(2023, 10, 15, 10, 0),
    },
    {
      id: 10,
      chatRoomId: 1,
      name: currentUser.name,
      title: currentUser.title,
      text: "좋습니다.",
      time: new Date(2023, 10, 15, 12, 15),
    },
    {
      id: 11,
      chatRoomId: 2,
      name: "최부기",
      title: "이사",
      text: "죄송합니다.",
      time: new Date(2023, 10, 15, 3, 5),
    },
    {
      id: 12,
      chatRoomId: 3,
      name: "곽미래",
      title: "사원",
      text: "토스 짱짱짱!!",
      time: new Date(2023, 10, 15, 10, 0),
    },
    {
      id: 13,
      chatRoomId: 4,
      name: "부공학",
      title: "대리",
      text: "포인트좀 뿌려주세요",
      time: new Date(2023, 10, 15, 9, 5),
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
        chatRoomId: roomId,
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
        {messages
          .filter(message => message.chatRoomId === roomId)
          .sort((a, b) => new Date(a.time) - new Date(b.time))
          .map((message) => (
            <div
              key={message.id}
              className={`message ${message.name === currentUser.name ? "user" : "other"
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
        <div ref={messagesEndRef} />
      </ScrollToBottom>
      <div className="message-input-container">
        <Input
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