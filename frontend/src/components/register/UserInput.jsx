import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
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
`;

const Input = styled.input`
    width: 16.1rem;
    height: 2rem;
    align-items: center;
    flex-shrink: 0;
    border: 4px solid #342479;
    box-shadow: -4px -4px 4px 0px rgba(52, 36, 121, 0.25), 4px 4px 4px 0px rgba(52, 36, 121, 0.25);
    padding-left: 0.2rem;
    color: white;
    cursor: pointer;
    border-radius: 0.625rem;
    border: 4px solid #342479;
    
`;

function UserInput() {
    return (
        <Container>
            <Input type="text" placeholder="이름" />
            <Input type="text" placeholder="이메일" />
            <Input type="password" placeholder="비밀번호" />
            <Input type="text" placeholder="회사명" />
            <Input type="text" placeholder="직책" />
            <Link to=""><Button>계정 생성하기</Button></Link>
        </Container>
    );
}

export default UserInput;
