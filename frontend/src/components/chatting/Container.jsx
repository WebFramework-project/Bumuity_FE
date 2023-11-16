// Container.js
import Memo from '../memo/Memo';
import Todo from '../todo/TodoMain';

function Container() {
  const containerStyle = {
    display: "flex",
    width: "24.3rem",
    height: "100vh",
    backgroundColor: "#1B1923",
    flexDirection: "column",
    gap: "0.69rem",
    overflow: "hidden"
  };

  return (
    <div style={containerStyle}>
      <div><Todo /></div>
      <div><Memo /></div>
    </div>
  );
}

export default Container;
