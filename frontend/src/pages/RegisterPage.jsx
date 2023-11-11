import UserInput from "../components/register/UserInput";

function Login(){

    const backgroundContainerStyle={
        display:"flex",
        background: "#0A0A14",
        width:"100vw",
        height:"100vh",
        flexDirection:"column",
        alignItems:"center",
        gap:"2.19rem"
        
    }

    const titleStyle={
        color: "#FBFDF5",
        fontFamily: "Roboto",
        fontSize: "1.5rem",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
        marginTop:"5rem"
    }

    return(
        <div style={backgroundContainerStyle}>
            <div style={titleStyle}>BUMUITY</div>
            <div><UserInput /></div>
        </div>
    );
}
export default Login;