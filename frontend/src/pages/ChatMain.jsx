import Container from '../components/chatting/Container'

function ChatMain(){
    const backgroundStyle={
        backgroundColor:"#0A0A14",
        display:"flex",
        width:"100vw",
        height:"100vh",
        justifyContent:"flex-end"
        
    }
    return(
        <div style={backgroundStyle}>
            <div><Container/></div>
        </div>
    );
}

export default ChatMain;