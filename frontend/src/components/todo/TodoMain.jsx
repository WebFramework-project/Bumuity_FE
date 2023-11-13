import TodoItem from './TodoItem';

function TodoMain() {
    const backgroundStyle = {
      backgroundColor: "#3B374E",
      width: "95%",
      height: "48vh", 
      marginTop:"13px",
      marginLeft:"10px"
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


    return (
      <div style={backgroundStyle}>
        <div style ={todoStyle}>TO DO LIST</div>
        <div><TodoItem/></div>
      </div>

    );
  }
  
  export default TodoMain;
  