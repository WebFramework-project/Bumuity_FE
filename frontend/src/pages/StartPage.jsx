
import logo from '../images/start/logo.gif';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


//styled 컴포넌트 사용 => hover 기능 구현(버튼 커스텀)

const BackStyle = styled.div`
    display: flex;
    background-color: #141325;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ImgStyle = styled.img`
    width: 20rem;
    height: 20rem;
`;

const TitleStyle = styled.div`
    color: #FBFDF5;
    font-family: Roboto;
    font-size: 4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const LinkButtonStyle = styled(Link)`
    color: #FBFDF5;
    font-family: Roboto;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-top: 1rem;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: #FFFFFF;
        text-decoration: none;
    }
`;

function StartPage() {
    return (
        <BackStyle>
            <div><ImgStyle src={logo} alt="Logo" /></div>
            <TitleStyle>BUMUITY</TitleStyle>
            <LinkButtonStyle to="/register">START</LinkButtonStyle>
        </BackStyle>
    );
}

export default StartPage;