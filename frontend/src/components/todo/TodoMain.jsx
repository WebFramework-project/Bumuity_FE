import React, { useState } from 'react';

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
    
    updatedTasks.push(toggledTask);
    setTasks(updatedTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div style={{ flexDirection: "column", alignItems: "center" }}>
      <div style={{
        fontSize: "18px",
        fontFamily: "Arial, sans-serif",
        fontWeight: "bold",
        marginBottom: "10px",
        textAlign: "center",
        border: "5px solid #fff",
        padding: "8px",
        borderRadius: "8px",
        color: "lightgray",
        backgroundColor: "#3B374E",
        width: "93%",
      }}>
        TO DO LIST
      </div>

    
      <div style={{ 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "lightgrey", 
        marginBottom: "10px",
        marginLeft: "10px",
        
        width: "100%", 
        height: "5vh", 
        paddingTop: "15px", 
        paddingLeft: "6px", 
        paddingRight: "50px", 
        overflow: "hidden", 
        borderRadius: "10px", 
        
        }}>
        <input
          type="text"
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          style={{ width: "80%", marginLeft: "15px", fontSize: "15px" }}
          onKeyPress={handleKeyPress}
        />
        <button onClick={addTask}>+</button>
      </div>


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
        borderRadius: "10px"
      }}>
         
        {tasks.map((task, index) => (
          <div key={index} onClick={() => handleToggle(index)}>
            {task.completed ? '✅' : '◻️'} {task.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoMain;
