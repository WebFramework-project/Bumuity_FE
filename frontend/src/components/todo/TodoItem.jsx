import TodoList from "./TodoList";

function TodoItem() {

    const backgroundStyle = {
        backgroundColor: "lightgray",
        width: "92%",
        height: "40vh", 
        marginTop:"12px",
        marginLeft:"15px"
      }

    return (
    <div style={backgroundStyle}>
      {/* <div><TodoList/></div> */}
    </div>
  
    );
}

export default TodoItem;
