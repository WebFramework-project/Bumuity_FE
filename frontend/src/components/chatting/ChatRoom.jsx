import React, { useState, useEffect, useRef } from "react";
import { MessageBox, Input } from "react-chat-elements";
import ScrollToBottom from "react-scroll-to-bottom";
import "../../styles/ChatRoom.css";
import sendImg from "../../images/start/Send.png";
import add from "../../images/start/add.PNG";
import FileUploadModal from "./FileUploadModal";

const ChatRoom = ({ roomId, currentUser }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      profileImg:
        "data:image/png;base64,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",
      id: 1,
      chatRoomId: 1,
      name: "이재용",
      title: "회장",
      type: "text",
      text: "오늘 저녁은 뭘 먹을지 회의를 시작해보지",
      time: new Date(2023, 10, 15, 12, 0),
    },
    {
      profileImg:
        "https://play-lh.googleusercontent.com/Kbu0747Cx3rpzHcSbtM1zDriGFG74zVbtkPmVnOKpmLCS59l7IuKD5M3MKbaq_nEaZM=w240-h480-rw",
      id: 2,
      chatRoomId: 4,
      name: "이해진",
      title: "대표",
      type: "text",
      text: "다들 네이버페이 쓰자~",
      time: new Date(2023, 10, 15, 9, 0),
    },
    {
      profileImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEX/3AAAAB//4gD/4AD/5AD/3gD/4QAABh8ACB//5gAABx8AAB792gARFB8ACx99bRhcUhnKrwxzZRfewAkeHh0HDh+kjxLuzgXStgtZTxrDqQ4oJh331QOqlBGBcRa9pA9pXRiMehU8NxwbHB4TFh5QRxpJQhu4nxCOfBU1MRzy0QavmBGXgxR4aRgxLRxAOhskIx3jxAhsXxhNRRpm5ptnAAAD50lEQVR4nO3Y2XajOhAFUJekAmSDZwbbGI/xnMHJ///bLQk7nYdOnnqgc89+sTFZLA4llURaLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4f2Ctvzz9p+7jt+HT9Px5RG3y+A/ezG+herQ2n53UxYxO/3oVVRXtPk+4ICq/QcK3756w/fBVws4/n9D07gl/JHn/pvcUfoOE4cQnDE7KfXBgLGurfC5J2K0Tqrrfsg6UUR96r6w1uuGPQBL2XcJgQHO5VS7P/Q7R+OCDBedO6r+YYeHyay6yqncp1C2U1qPFfnAyjc5oHn1CnafJJuaW6pPTCZ/kwCVMXEKTEQ10S0/H/iz164FsBkd/+Fh+uWn4y8wwXJoW83PSzeU+9XQ5zctTRuFKihbMQxc7KChdusdQ0PNqPpeH0HNlN2dKx71Dn7ovTZ6s5tUltI8RDQJ3zEozs626T66GWTiOmU9JsvZV46tSQWBXqVtD+ErJJDbK3vI3lSR8NVINyj7epB74hbBOqHd1fVu3Lss5UaFlBqdJPUnnIV2bW0SzDId2ROGjvf3AWiklv/iEl/ZLy/ZCKoL730uBdWtDC0nYSSv/VLhMoyz46dWbwPTDXrxNJveer8r9papWw8QlVJf2LJD6nm/1ZWXy0eg6GktCqWS4rytrnru95g5TMwmrnLb3hGZed0sak+usl+gpps3R1ieZLxt/ckNTWSh8f62vEQ2bndAuqF2PUj0lWl3LspRPl/AQPRlZ9Vf1EFYTWRmy8znzCQs/G/01+u3HBid8CytlL7dOYx6ioZWpJuv/LeFR29VtmMouNRrZIFDxVqrHP2pod1GTR+nOrXxmkrpuwjwjP7ekl3ZcwlW01hw8JDTSbpPe6bticpm4hCVF83qBaY27B/V3Y3zBrkO5O45n21RWBEk4l/Vf2yy6J5Tc5Xi7kRdh89rx002XqauePSYP9dAu3qvZRPbYvsjz17J8r5lNPz3mgS5eadN1Cavo2e1lRpTsApYxO2Ml7bSfuBnomuzCSon1Oplxc9dD+0J+hCl52a2Uy0Kzrnzd1gnD3W1/Fg5d90zW2UXazYvvMfqtS4fRdbFOm1xCaSbVwt+eXQ1lRqlil3Zeele7HvuEnWffQmyPLnJ4rvfd+dIn5LjeplO4aG6fEer+uqcDN9K0KU/aMCt3xHFZ76k5LlwIle/n+9zIO5P//xSrolouX7OyuRuan/o4pfh+wO9vwG5rwPcdkFbGmKC5cxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfrn/ADCaOc2HgoxfAAAAAElFTkSuQmCC",
      id: 3,
      chatRoomId: 2,
      name: "최부기",
      title: "이사",
      type: "text",
      text: "내일 회식은 롯데리아에서 하겠습니다.",
      time: new Date(2023, 10, 15, 3, 0),
    },
    {
      id: 4,
      profileImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUAAAD////8/PxoaGjt7e0EBAS9vb2hoaEuLi53d3fw8PDi4uIkJCTm5uZDQ0OWlpaMjIxZWVlgYGA2NjbKysq0tLTX19f29vZtbW1KSkqDg4MdHR08PDyoqKiwsLB8fHwyMjIUFBSbm5vFxcXa2togICAXFxdaWlpISEiQkJDzS2V5AAAGnElEQVR4nO2Z6XriOBBFLYGJY4fFYDBJIGHJxvu/4Lg2yaZhgpn5NXPP1wEsa6lb2krqJAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8H/la7F4ou80TS++T8++/46zKq7UeKWVP3LfXvo6+9kqr72r64+Hp3YL64GxzkLiJqZKQhkyPUebNodqmNf1sJo+BRufqeR6Tj8zrmS9lxfzbgX8uN5oXU3hwVvR1JWPl493CnypnfP8r/k4RZ89ucg0JB9ioiQMw/MxVHnkZ8/VbruJY/r5KAUW8iK3Coatxwfz1qSILebrewSenJnjRYtV/aLpxEgVpsnU0rwrOSnmGnGONEnHlOJjWWHET4Uo5FfZuY8W8VEVJs9qnljnZn3lpclClalRzj3ZuwdOXHHqOJRYijPp452eN+HRVR0pJty7wQWF7oJCL/aPOwrzaBl/b/pKbCzm4sf5eiWODV6quFLt4uCRJZsyIp/y+HuntyJ7JXkyEZZP349i9/FmheyjVVvhiw6Y6liLQhsRt1PEdmv++WZveKy5ubi07Cp8qM0e7umpKqS10Mx/Dk4a36RwbI7sKJTJW2eJ9e2wt0IZYMtYtTlpL1YsJPXd8kt3TT/MchKRi6dX4gMZ3TX9fG8b9YtCXsIG5wrHXPOWKptJd371Vcid7z7+VDjn0eHVMO3ZlB+bCbOk5iiloNKD2FdpslXXhMUqv0nhxDzdURiWHXOX++yrUPqe59RuQ9jWN1X/n3QEJtFO704z+myWvj1tCW9lu6+mMrOLZrfLvsuy/C5lk/1FIY+m/Fxhzh3HD+vhuGH42k9fGha+j/NFSl5UZs2ZwmeS0QzdHVkw6yic6DZRxw36FoWvb/S5sXxBYevhHlJZ7dmmURaMIQodnZm8NteJwin33aFxLK/g31FhSp3gZYEvSm3kFoUZu2n6byvkLbw2jW9pjEu/JHWmW7qzaKIShWxWRUtpUy6dt/swyWoZp81fNYmB5S8Kdwmtz6trCjc/E+anb5yapjrh2OutgTWRxNIMsFjHFB7F2hF/icLcyi6GKtHzEpXepDCjKr27plDXiztWmqb5cuhClBU2VFkGaTERTRawmELaE7w0XJ0rtLHMf4XF3r8oXFAs593jFYWFBYE9Vxrl4C3uC+Ezz3va1XQHtLhtpQoHYmLN3dsdpcQ8xsv5XiT+orBMPmluj7TlC30oJvZXyP79XNpQtahtFeyZyRvNXqjCHaUN5FMV1p1633Or8XiTwrm0OdT99FzhdlS5OxUqm5X6aNiumgbtWszR099YFXKGKa9/e1NIOlrnywfrxR0//q6Qt97NZYUagvRXmMpZlJb1rXjcTWQT8Vb1TmqeRYW87lDctqT+zZOOwqR8ZJro6lnWY3e6USG3dLimcHCfQj3mctC8FIkcgsxFIa+tkmXZVniSibractm2wnB4oqhN9km19neFXPnHQ1dhiGnuVPgqx/uKVNFhsxmp36RWR9gkivqQAmGbpGh7TLOyCfjK9om2pVBzX1bo7YwvCh8lpPX1sq3Q4tLGvIE00ne3+JS2VlSFxF7NhEvt1CLHYT3BSAFnCjdyS+HcS9g8d22FG6pSFE5juudprkH0V1tFUw352PvOCXgcx4/cn/h9T4WJHiwXpsR73r9k/Muqs233ULhMSJ2u34uOQjs98WlER6Mc8g/iTCqqW0lyrjDJve1bqnAk22ozKx7FoUVfgYmuwX55+JABy1XsvY5Mmlq6+a/Z/nhdYjteEhQuOMePLsrFaCUua/qKqtEbFzde6dZrQURLYbwAUYVr513EUyzcL2yjyWcxpO75fNYtYz8k3fXCBYU6kIuo8IdrVKfFv2Uii2zlupR/KhwEQRZsdwr5/kf8Zqro8LbbLAnbtNtkAi18y+WxD/UGZxQVPovCr6GJ44FVWGT6GS/VREPaVjhrObClUEMPZbi754b4JZwt4u0m3U819s3lSWbHWBXSCzJnLnlmrJB/hivhY8uoZWxpf7R2GlvDvUhS8cn2RRoeK6fwehaC7vzeU9R+Vumd98Gi5NcnRv311HrK+OeX/cwyHoFZ1spud9453XlnnXv5xXRU5Pmw2l642k2Ta1f4k9n27W17Ki++vAGu9e/+36LP/1lcbUAqv5Rq2tLzHP+wWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/xn+ApiuSYbsqHipAAAAAElFTkSuQmCC",
      chatRoomId: 1,
      name: "이한성",
      title: "상무",
      type: "text",
      text: "돈까스만 아니면 될 것 같습니다.",
      time: new Date(2023, 10, 15, 12, 5),
    },
    {
      profileImg:
        "https://play-lh.googleusercontent.com/Kbu0747Cx3rpzHcSbtM1zDriGFG74zVbtkPmVnOKpmLCS59l7IuKD5M3MKbaq_nEaZM=w240-h480-rw",
      id: 5,
      chatRoomId: 4,
      name: currentUser.name,
      title: currentUser.title,
      type: "text",
      text: "넵",
      time: new Date(2023, 10, 15, 9, 2),
    },
    {
      profileImg:
        "data:image/png;base64,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",
      id: 6,
      chatRoomId: 1,
      name: "박상상",
      title: "",
      type: "text",
      text: "그럼 카레로 하죠",
      time: new Date(2023, 10, 15, 12, 10),
    },
    {
      profileImg:
        "data:image/jpeg;base64,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",
      id: 7,
      chatRoomId: 3,
      name: "이승건",
      title: "대표",
      type: "text",
      text: "토스 짱짱",
      time: new Date(2023, 10, 15, 10, 0),
    },
    {
      profileImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEX/3AAAAB//4gD/4AD/5AD/3gD/4QAABh8ACB//5gAABx8AAB792gARFB8ACx99bRhcUhnKrwxzZRfewAkeHh0HDh+kjxLuzgXStgtZTxrDqQ4oJh331QOqlBGBcRa9pA9pXRiMehU8NxwbHB4TFh5QRxpJQhu4nxCOfBU1MRzy0QavmBGXgxR4aRgxLRxAOhskIx3jxAhsXxhNRRpm5ptnAAAD50lEQVR4nO3Y2XajOhAFUJekAmSDZwbbGI/xnMHJ///bLQk7nYdOnnqgc89+sTFZLA4llURaLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4f2Ctvzz9p+7jt+HT9Px5RG3y+A/ezG+herQ2n53UxYxO/3oVVRXtPk+4ICq/QcK3756w/fBVws4/n9D07gl/JHn/pvcUfoOE4cQnDE7KfXBgLGurfC5J2K0Tqrrfsg6UUR96r6w1uuGPQBL2XcJgQHO5VS7P/Q7R+OCDBedO6r+YYeHyay6yqncp1C2U1qPFfnAyjc5oHn1CnafJJuaW6pPTCZ/kwCVMXEKTEQ10S0/H/iz164FsBkd/+Fh+uWn4y8wwXJoW83PSzeU+9XQ5zctTRuFKihbMQxc7KChdusdQ0PNqPpeH0HNlN2dKx71Dn7ovTZ6s5tUltI8RDQJ3zEozs626T66GWTiOmU9JsvZV46tSQWBXqVtD+ErJJDbK3vI3lSR8NVINyj7epB74hbBOqHd1fVu3Lss5UaFlBqdJPUnnIV2bW0SzDId2ROGjvf3AWiklv/iEl/ZLy/ZCKoL730uBdWtDC0nYSSv/VLhMoyz46dWbwPTDXrxNJveer8r9papWw8QlVJf2LJD6nm/1ZWXy0eg6GktCqWS4rytrnru95g5TMwmrnLb3hGZed0sak+usl+gpps3R1ieZLxt/ckNTWSh8f62vEQ2bndAuqF2PUj0lWl3LspRPl/AQPRlZ9Vf1EFYTWRmy8znzCQs/G/01+u3HBid8CytlL7dOYx6ioZWpJuv/LeFR29VtmMouNRrZIFDxVqrHP2pod1GTR+nOrXxmkrpuwjwjP7ekl3ZcwlW01hw8JDTSbpPe6bticpm4hCVF83qBaY27B/V3Y3zBrkO5O45n21RWBEk4l/Vf2yy6J5Tc5Xi7kRdh89rx002XqauePSYP9dAu3qvZRPbYvsjz17J8r5lNPz3mgS5eadN1Cavo2e1lRpTsApYxO2Ml7bSfuBnomuzCSon1Oplxc9dD+0J+hCl52a2Uy0Kzrnzd1gnD3W1/Fg5d90zW2UXazYvvMfqtS4fRdbFOm1xCaSbVwt+eXQ1lRqlil3Zeele7HvuEnWffQmyPLnJ4rvfd+dIn5LjeplO4aG6fEer+uqcDN9K0KU/aMCt3xHFZ76k5LlwIle/n+9zIO5P//xSrolouX7OyuRuan/o4pfh+wO9vwG5rwPcdkFbGmKC5cxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfrn/ADCaOc2HgoxfAAAAAElFTkSuQmCC",
      id: 8,
      chatRoomId: 2,
      name: "김범수",
      title: "사장",
      type: "text",
      text: "누가 새벽 3시에 카톡을 보내냐",
      time: new Date(2023, 10, 15, 3, 5),
    },
    {
      profileImg:
        "data:image/jpeg;base64,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",
      id: 9,
      chatRoomId: 3,
      name: currentUser.name,
      title: currentUser.title,
      type: "text",
      text: "토스 짱짱짱!!",
      time: new Date(2023, 10, 15, 10, 0),
    },
    {
      id: 10,
      chatRoomId: 1,
      name: currentUser.name,
      title: currentUser.title,
      type: "text",
      text: "좋습니다.",
      time: new Date(2023, 10, 15, 12, 15),
    },
    {
      profileImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEX/3AAAAB//4gD/4AD/5AD/3gD/4QAABh8ACB//5gAABx8AAB792gARFB8ACx99bRhcUhnKrwxzZRfewAkeHh0HDh+kjxLuzgXStgtZTxrDqQ4oJh331QOqlBGBcRa9pA9pXRiMehU8NxwbHB4TFh5QRxpJQhu4nxCOfBU1MRzy0QavmBGXgxR4aRgxLRxAOhskIx3jxAhsXxhNRRpm5ptnAAAD50lEQVR4nO3Y2XajOhAFUJekAmSDZwbbGI/xnMHJ///bLQk7nYdOnnqgc89+sTFZLA4llURaLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4f2Ctvzz9p+7jt+HT9Px5RG3y+A/ezG+herQ2n53UxYxO/3oVVRXtPk+4ICq/QcK3756w/fBVws4/n9D07gl/JHn/pvcUfoOE4cQnDE7KfXBgLGurfC5J2K0Tqrrfsg6UUR96r6w1uuGPQBL2XcJgQHO5VS7P/Q7R+OCDBedO6r+YYeHyay6yqncp1C2U1qPFfnAyjc5oHn1CnafJJuaW6pPTCZ/kwCVMXEKTEQ10S0/H/iz164FsBkd/+Fh+uWn4y8wwXJoW83PSzeU+9XQ5zctTRuFKihbMQxc7KChdusdQ0PNqPpeH0HNlN2dKx71Dn7ovTZ6s5tUltI8RDQJ3zEozs626T66GWTiOmU9JsvZV46tSQWBXqVtD+ErJJDbK3vI3lSR8NVINyj7epB74hbBOqHd1fVu3Lss5UaFlBqdJPUnnIV2bW0SzDId2ROGjvf3AWiklv/iEl/ZLy/ZCKoL730uBdWtDC0nYSSv/VLhMoyz46dWbwPTDXrxNJveer8r9papWw8QlVJf2LJD6nm/1ZWXy0eg6GktCqWS4rytrnru95g5TMwmrnLb3hGZed0sak+usl+gpps3R1ieZLxt/ckNTWSh8f62vEQ2bndAuqF2PUj0lWl3LspRPl/AQPRlZ9Vf1EFYTWRmy8znzCQs/G/01+u3HBid8CytlL7dOYx6ioZWpJuv/LeFR29VtmMouNRrZIFDxVqrHP2pod1GTR+nOrXxmkrpuwjwjP7ekl3ZcwlW01hw8JDTSbpPe6bticpm4hCVF83qBaY27B/V3Y3zBrkO5O45n21RWBEk4l/Vf2yy6J5Tc5Xi7kRdh89rx002XqauePSYP9dAu3qvZRPbYvsjz17J8r5lNPz3mgS5eadN1Cavo2e1lRpTsApYxO2Ml7bSfuBnomuzCSon1Oplxc9dD+0J+hCl52a2Uy0Kzrnzd1gnD3W1/Fg5d90zW2UXazYvvMfqtS4fRdbFOm1xCaSbVwt+eXQ1lRqlil3Zeele7HvuEnWffQmyPLnJ4rvfd+dIn5LjeplO4aG6fEer+uqcDN9K0KU/aMCt3xHFZ76k5LlwIle/n+9zIO5P//xSrolouX7OyuRuan/o4pfh+wO9vwG5rwPcdkFbGmKC5cxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfrn/ADCaOc2HgoxfAAAAAElFTkSuQmCC",
      id: 11,
      chatRoomId: 2,
      name: "최부기",
      title: "이사",
      type: "text",
      text: "죄송합니다.",
      time: new Date(2023, 10, 15, 3, 5),
    },
    {
      profileImg:
        "data:image/jpeg;base64,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",
      id: 12,
      chatRoomId: 3,
      name: "곽미래",
      title: "사원",
      type: "text",
      text: "토스 짱짱짱!!",
      time: new Date(2023, 10, 15, 10, 0),
    },
    {
      profileImg:
        "https://play-lh.googleusercontent.com/Kbu0747Cx3rpzHcSbtM1zDriGFG74zVbtkPmVnOKpmLCS59l7IuKD5M3MKbaq_nEaZM=w240-h480-rw",
      id: 13,
      chatRoomId: 4,
      name: "부공학",
      title: "대리",
      type: "text",
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
        type: "text",
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

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas'); //canvas API 사용
        const ctx = canvas.getContext('2d');
  
        const maxWidth = 380; //이미지 최대 크기 조절
        const maxHeight = 180;
  
        let width = img.width;
        let height = img.height;
  
        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }
  
        canvas.width = width;
        canvas.height = height;
  
        ctx.drawImage(img, 0, 0, width, height);
  
        const base64String = canvas.toDataURL('image/jpeg'); // 이미지를 JPEG 형식의 base64 문자열로 변환
  
        const newMessageObj = {
          id: messages.length + 1,
          chatRoomId: roomId,
          name: currentUser.name,
          title: currentUser.title,
          text: base64String, //변환된채로 text 속성에다가 저장함
          type: "photo",
          time: new Date(),
          user: true,
        };
        setMessages([...messages, newMessageObj]);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };
  

  return (
    <div className="chat-room">
      <ScrollToBottom className="messages-container">
        {messages
          .filter((message) => message.chatRoomId === roomId)
          .sort((a, b) => new Date(a.time) - new Date(b.time))
          .map((message) => (
            <div
              key={message.id}
              className={`message ${
                message.name === currentUser.name ? "user" : "other"
              }`}
            >
              {message.name !== currentUser.name && (
                <div className="message-sender-info">
                  <img
                    src={message.profileImg}
                    alt={`${message.name}`}
                    className="message-sender-image"
                  />
                  <span className="message-sender-name">{message.name}</span>
                  {message.title && (
                    <span className="message-sender-title">
                      {message.title}
                    </span>
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
              {message.type === "text" ? (
                <MessageBox
                  style={{
                    backgroundColor:
                      message.name === currentUser.name ? "blue" : "white",
                    color:
                      message.name === currentUser.name ? "white" : "black",
                  }}
                  position={
                    message.name === currentUser.name ? "right" : "left"
                  }
                  type="text"
                  text={message.text}
                  date={new Date(message.time)}
                />
              ) : (
                message.type === "photo" && (
                  <MessageBox
                    style={{
                      backgroundColor:
                        message.name === currentUser.name ? "blue" : "white",
                      color:
                        message.name === currentUser.name ? "white" : "black",
                    }}
                    position={
                      message.name === currentUser.name ? "right" : "left"
                    }
                    type="photo"
                    date={new Date(message.time)}
                    data={{
                      uri: message.text,
                    }}
                  />
                )
              )}
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
            <>
              <div
                id="send"
                onClick={sendMessage}
                style={{ cursor: "pointer" }}
              >
                <img src={sendImg} alt="Send" id="sendImg" />
              </div>
              <img
                id="add"
                src={add}
                onClick={() => setIsModalOpen(true)}
                alt=""
              />
            </>
          }
        />
      </div>
      <FileUploadModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onFileUpload={handleFileUpload}
      />
    </div>
  );
};

export default ChatRoom;
