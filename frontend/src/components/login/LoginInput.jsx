import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Button = styled.button`
    width: 16.8rem;
    height: 2rem;
    align-items: center;
    flex-shrink: 0;
    border-radius: 0.2rem;
    border: 1px solid #4D0EFF;
    padding-left: 0.2rem;
    background: #4D0EFF;
    color: white;
    cursor: pointer;
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
    marginBottom: 1.5rem;
    padding-left:0.3rem;

    background-color: ${(props) => (props.clicked ? 'white' : '#0A0A14;')};
    color: ${(props) => (props.clicked ? '#342479' : 'white')};

    &:focus {
        outline: none;
        background-color: white;
        color: #342479;
    }
`;

function UserInput() {
    const [clickedInput, setClickedInput] = useState(null);

    return (
        <Container>
            <Input
                type="text"
                placeholder="이메일"
                clicked={clickedInput === 'email'}
                onClick={() => setClickedInput('email')}
                onBlur={() => setClickedInput(null)}
            />
            <Input
                type="password"
                placeholder="비밀번호"
                clicked={clickedInput === 'password'}
                onClick={() => setClickedInput('password')}
                onBlur={() => setClickedInput(null)}
            />
            <Link to="/Profile">
                <Button>로그인</Button>
            </Link>
        </Container>
    );
}

export default UserInput;
