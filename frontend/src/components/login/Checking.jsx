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
        textDecoration:"none"
    }

    const containerStyle={
        display:"flex",
        gap:"7.5rem",
        marginTop:"0.5rem"
    }

    return(
        <div style={containerStyle}>
            <div style={lineStyle1}>계정이 없으신가요?</div>
            <Link to="/register" style={lineStyle2}>회원가입</Link>
        </div>
    );

}

export default Checking;