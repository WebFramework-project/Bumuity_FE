import Container from '../components/chatting/Container'
import ChatComponent from '../pages/ChatComponent'

function ChatMain(){
    const backgroundStyle={
        backgroundColor:"#0A0A14",
        display:"flex",
        width:"100%",
        height:"100vh",
        justifyContent:"space-between",
        gap:"10px"
        
    }

    const containerStyle={
        marginRight:"0px"
    }
    const chatStyle={
        width:"100%"
    }
    return(
        <div style={backgroundStyle}>
            
            <div style={chatStyle}><ChatComponent/></div>
            <div style={containerStyle}><Container/></div>
        </div>
    );
}

export default ChatMain;