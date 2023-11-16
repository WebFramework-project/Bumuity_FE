import TodoList from "./TodoList";
import TodoItem from "./TodoList";

function TodoMain() {
    const backgroundStyle = {
      backgroundColor: "#3B374E",
      width: "95%",
      height: "48vh", 
      marginTop:"13px",
      marginLeft:"10px",
      overflow: "hidden"
    }
  
    const todoStyle = {
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

    const todobackgroundStyle = {
        backgroundColor: "lightgray",
        width: "95%",
        height: "40vh", 
        marginTop:"13px",
        marginLeft:"10px",
        overflow: "hidden"

    }


    return (
      <div style={backgroundStyle}>
        <div style ={todoStyle}>TO DO LIST</div>
        <div style ={todobackgroundStyle}></div>
        <div>< TodoList/></div>
    
        
      </div>

    );
  }
  
  export default TodoMain;
  