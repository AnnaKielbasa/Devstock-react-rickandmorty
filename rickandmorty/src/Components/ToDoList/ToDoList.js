import { useState } from "react";
import NewLogo from "../NewLogo/NewLogo";
import "./ToDoList.css";

const ToDoList = ({ logo, setLogo }) => {
  const [element, setElement] = useState("");
  const [inputValue, setInputValue] = useState([]);

  const addElementList = (e) => {
    setInputValue([...inputValue, element]);
    setElement("");
  };

  const deleteElementList = (index) =>
    setInputValue(inputValue.filter((_, i) => i !== index));

  return (
    <div>
      <h2 className="todo-header">TO DO List:</h2>
      <div className="container">
        <div className="input-container">
          <input
            type="text"
            placeholder="Type item..."
            onChange={(event) => setElement(event.target.value)}
            value={element}
          />
          <button onClick={addElementList} type="submit">
            Add to list
          </button>
        </div>
        <div>
          <ol className="list-container">
            {inputValue.map((item, index) => (
              <div className="list-item-container" key={index}>
                <li>{item}</li>
                <button onClick={() => deleteElementList(index)}>Delete</button>
              </div>
            ))}
          </ol>
        </div>
      </div>

      <NewLogo logo={logo} setLogo={setLogo} />
    </div>
  );
};

export default ToDoList;
