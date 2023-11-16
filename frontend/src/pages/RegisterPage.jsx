import UserInput from "../components/register/UserInput";
import Cheking from "../components/register/Checking"

function Login(){

    const backgroundContainerStyle={
        display:"flex",
        background: "#0A0A14",
        width:"100vw",
        height:"100vh",
        flexDirection:"column",
        alignItems:"center",

    }

    const titleStyle={
        color: "#FBFDF5",
        fontFamily: "Roboto",
        fontSize: "1.5rem",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
        marginTop:"5rem",
        marginBottom:"2.19rem"
    }

    return(
        <div style={backgroundContainerStyle}>
            <div style={titleStyle}>BUMUITY</div>
            <div><UserInput /></div>
            <div><Cheking/></div>
        </div>
    );
}
export default Login;