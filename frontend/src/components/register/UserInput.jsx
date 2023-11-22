import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Button = styled.button`
  width: 16.8rem;
  height: 2rem;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.2rem;
  border: 1px solid #4d0eff;
  padding-left: 0.2rem;
  background: ${({ disabled }) => (disabled ? "#A0A0A0" : "#4D0EFF")};
  color: white;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  margin-top: 1.5rem;
`;

const Input = styled.input`
  width: 16.1rem;
  height: 2rem;
  align-items: center;
  flex-shrink: 0;
  border: 4px solid #342479;
  box-shadow: -4px -4px 4px 0px rgba(52, 36, 121, 0.25),
    4px 4px 4px 0px rgba(52, 36, 121, 0.25);
  padding-left: 0.2rem;
  border-radius: 0.625rem;
  border: 4px solid #342479;
  padding-left: 0.3rem;

  background-color: #0a0a14;
  color: white;

  &:focus {
    outline: none;
    background-color: white;
    color: #342479;
  }
`;

function UserInput() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const imageUrl =
    "https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png";

  const isButtonDisabled =
    !name || !email || !password || !company || !position;

  const onSubmit = () => {
    const data = { name, email, password, company, position, imageUrl };
    localStorage.setItem("userInfo", JSON.stringify(data));
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="text"
        placeholder="소속"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <Input
        type="text"
        placeholder="직책"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <Link to="/Login" onClick={onSubmit}>
        <Button disabled={isButtonDisabled}>계정 생성하기</Button>
      </Link>
    </Container>
  );
}

export default UserInput;
