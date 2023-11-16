import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import UserPic from './UserPic';

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
    background: ${(props) => (props.disabled ? '#A0A0A0' : '#4D0EFF')};
    color: white;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
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

    background-color: ${(props) => (props.clicked ? 'white' : '#0A0A14;')};
    color: ${(props) => (props.clicked ? '#342479' : 'white')};

    &:focus {
        outline: none;
        background-color: white;
        color: #342479;
    }
`;

function UserInput() {
    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        company: '',
        position: '',
    });

    const handleInputChange = (field, value) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [field]: value,
        }));
    };

    const isButtonDisabled = Object.values(inputValues).some((value) => value === '');

    return (
        <Container>
            <Input
                type="text"
                placeholder="이름"
                value={inputValues.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
            />
            <Input
                type="text"
                placeholder="이메일"
                value={inputValues.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
            />
            <Input
                type="text"
                placeholder="회사명"
                value={inputValues.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
            />
            <Input
                type="text"
                placeholder="직책"
                value={inputValues.position}
                onChange={(e) => handleInputChange('position', e.target.value)}
            />
            <UserPic />
            <Link to="">
                <Button disabled={isButtonDisabled}>프로필 설정하기</Button>
            </Link>
        </Container>
    );
}

export default UserInput;
