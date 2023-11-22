import React, { useState } from 'react';
import styled from 'styled-components';

const TaskWrapper = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const TaskText = styled.span`
  margin-left: 8px;
  ${({ completed }) => completed && 'text-decoration: line-through;'}

  &:hover {
    cursor: pointer;
  }
`;

function TodoMain() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggle = (index) => {
    const updatedTasks = [...tasks];
    const toggledTask = updatedTasks.splice(index, 1)[0];
    toggledTask.completed = !toggledTask.completed;
  
    if (toggledTask.completed) {
      updatedTasks.push(toggledTask); //체크된거 내리기
    } else {
      updatedTasks.unshift(toggledTask); //체크 해제된거 올리기
    }
  
    setTasks(updatedTasks);
  };
  

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const containStyle={
    backgroundColor: "rgb(59, 55, 78)",
    width: "95%",
    height: "48vh",
    marginLeft: "10px",
    marginTop:"3px"
  }

  return (
    <div style={containStyle}>
    <div style={{ flexDirection: "column", alignItems: "center" }}>
      {/* TO DO LIST Title */}
      <div style={{
        fontSize: "18px",
        fontFamily: "Arial, sans-serif",
        fontWeight: "bold",
        marginBottom: "10px",
        textAlign: "center",
        border: "5px solid #fff",
        padding: "10px",
        marginLeft: "0px",
        marginRight: "20px",
        borderRadius: "8px",
        color: "lightgray",
        backgroundColor: "#3B374E",
        width: "92%",
      }}>
        TO DO LIST
      </div>

      {/* Input and Add Button */}
      <div style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgrey",
        marginBottom: "10px",
        marginLeft: "10px",
        marginRight:"10px",
        height: "5vh",
        paddingTop: "15px",
        paddingLeft: "6px",
        paddingRight: "5px",
        overflow: "hidden",
        borderRadius: "10px",
      }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          style={{ width: "17rem", marginLeft: "15px", fontSize: "15px", marginRight: "5px" }}
          onKeyPress={handleKeyPress}
        />
        <button onClick={addTask}>+</button>
      </div>

      {/* Todo List */}
      <div style={{
        backgroundColor: "lightgrey",
        width: "100%",
        height: "37vh",
        marginLeft: "10px",
        marginRight: "10px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        paddingTop: "15px",
        paddingLeft: "10px",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "left",
        borderRadius: "10px",
        width: "92%",
      }}>


        {tasks.map((task, index) => (
          <TaskWrapper key={index} onClick={() => handleToggle(index)}>
            <div>
              {task.completed ? '✅' : '◻️'}
            </div>
            <TaskText completed={task.completed}>
              {task.text}
            </TaskText>
          </TaskWrapper>
        ))}
      </div>
    </div>
    </div>
  );
}

export default TodoMain;
