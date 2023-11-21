import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

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
    border: 1px solid #4D0EFF;
    padding-left: 0.2rem;
    background: ${({ disabled }) => (disabled ? '#A0A0A0' : '#4D0EFF')};
    color: white;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    margin-top: 1.5rem;
`;

const Input = styled.input`
    width: 16.1rem;
    height: 2rem;
    align-items: center;
    flex-shrink: 0;
    border: 4px solid #342479;
    box-shadow: -4px -4px 4px 0px rgba(52, 36, 121, 0.25), 4px 4px 4px 0px rgba(52, 36, 121, 0.25);
    padding-left: 0.2rem;
    border-radius: 0.625rem;
    border: 4px solid #342479;
    padding-left: 0.3rem;

    background-color: #0A0A14;
    color: white;

    &:focus {
        outline: none;
        background-color: white;
        color: #342479;
    }
`;

function UserInput() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');

    const isButtonDisabled = !name || !email || !password || !company || !position;

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
            <Link to="/Login">
                <Button disabled={isButtonDisabled}>계정 생성하기</Button>
            </Link>
        </Container>
    );
}

function Login() {
    const [email, setEmail] = useState(localStorage.getItem('email') || '');
    const [password, setPassword] = useState('');

    const isButtonDisabled = !email || !password;

    const handleSubmit = (e) => {
        e.preventDefault();
        // ...로그인 로직...
        const registeredEmail = localStorage.getItem('email');
        const registeredPassword = localStorage.getItem('password');

        if (email === registeredEmail && password === registeredPassword) {
            alert('로그인 성공!');
            // 여기서 로그인 성공 후의 로직을 작성하면 됩니다.
            // 예: 로그인 상태를 관리하는 상태를 업데이트하거나, 로그인 후의 페이지로 리다이렉트 등
        } else {
            alert('이메일 또는 비밀번호가 잘못되었습니다.');
        }
    };

    return (
        <Container onSubmit={handleSubmit}>
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
            <Link to="/Chat">
                <Button disabled={isButtonDisabled}>로그인</Button>
            </Link>
        </Container>
    );
}

export default UserInput;
