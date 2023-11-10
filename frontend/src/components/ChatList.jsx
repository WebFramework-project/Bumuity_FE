import "../styles/ChatList.css";

const ChatList = ({ onSelectRoom }) => {
  const rooms = [
    {
      id: "1",
      name: "SAMSUNG/삼성전자",
      preview: "최근 활동의 미리보기",
      unread: 5,
      time: "09:15",
    },
    {
      id: "2",
      name: "KAKAO/카카오코퍼레이션",
      preview: "미리보기 텍스트",
      unread: 3,
      time: "08:30",
    },
    {
      id: "3",
      name: "Toss/토스뱅크",
      preview: "동료와의 미팅룸",
      unread: 2,
      time: "어제",
    },
    {
      id: "4",
      name: "NAVER/네이버",
      preview: "회의록 공유",
      unread: 3,
      time: "11월 7일",
    },
  ];

  return (
    <div className="chat-list">
      {rooms.map((room) => (
        <div
          key={room.id}
          className="chat-list-item"
          onClick={() => onSelectRoom(room.id)}
        >
          <div className="chat-list-item-name">{room.name}</div>
          <div className="chat-list-item-preview">{room.preview}</div>
          <div className="chat-list-item-details">
            {room.unread > 0 && (
              <span className="chat-unread-count">{room.unread}</span>
            )}
            <span className="chat-time">{room.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
