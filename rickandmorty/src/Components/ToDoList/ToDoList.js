import { useState } from "react";

function ToDoList() {
  const [element, setElement] = useState("");
  const [inputValue, setInputValue] = useState([]);

  const addElementList = () => setInputValue([...inputValue, element]);

  const deleteElementList = (index) =>
    setInputValue(inputValue.filter((_, i) => i !== index));

  return (
    <div>
      <input
        type="text"
        placeholder="Type item that will be added to list.."
        onChange={(event) => setElement(event.target.value)}
      />
      <button onClick={addElementList} type="submit">
        Add to list
      </button>
      {
        <div>
          <ol>
            {inputValue.map((item, index) => (
              <div key={index}>
                <li>
                  {item}
                  <button onClick={() => deleteElementList(index)}>
                    Delete this item
                  </button>
                </li>
              </div>
            ))}
          </ol>
        </div>
      }
    </div>
  );
}

export default ToDoList;
