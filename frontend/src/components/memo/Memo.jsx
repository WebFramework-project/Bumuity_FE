


function Memo() {
    const backgroundStyle = {
    
      backgroundColor: "#3B374E",
      width: "95%", 
      height: "48vh",
      marginLeft:"10px"
    }
  
    const memoStyle = {
        fontSize: "18px", 
        fontFamily: "Arial, sans-serif",
        fontWeight: "bold", 
        marginBottom: "10px",
        textAlign: "center",
        border: "5px solid #fff", 
        padding: "10px",
        borderRadius: "8px", 
        color: "lightgray",
      };
      
    const textareaStyle = {
        width: "90%", 
        height: "40vh", 
        marginLeft: "15px",
        backgroundColor: "lightgray",
        fontSize: "20px", 
        borderRadius: "8px",
        padding: "1px"
      };
      
    return (
      <div style={backgroundStyle}>
        <div style ={memoStyle}>M E M O</div>
        <textarea style={textareaStyle}></textarea>
      </div>
    );
  }
  
  export default Memo;
  
