import { Link } from "react-router-dom";


function Checking(){
    
    const lineStyle1={
        color: "#D7D7DD",
        fontFamily: "Roboto",
        fontSize: "0.7rem",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }

    const lineStyle2={
        color: "#4D0EFF",
        fontFamily: "Roboto",
        fontSize: "0.7rem",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
        cursor:"pointer",
        textDecoration: "none"
    }

    const containerStyle={
        display:"flex",
        gap:"6.8rem",
        marginTop:"0.5rem"
    }

    return(
        <div style={containerStyle}>
            <div style={lineStyle1}>이미 계정이 있으신가요?</div>
            <Link to="/login" style={lineStyle2}>로그인</Link>
        </div>
    );

}

export default Checking;