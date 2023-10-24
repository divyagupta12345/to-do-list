import React, { useState } from "react";
import './App.css';
import ToDoLists from "./Todolist";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofItems = () => {
    setItems((oldItems) => {
      return [...oldItems, { id: new Date().getTime(), text: inputList }];
    });
    setInputList("");
  };

  const deleteItem = (id) => {
    setItems((oldItems) => oldItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add items"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listofItems}>+</button>
          <ol>
            {items.map((item) => (
              <ToDoLists
                key={item.id}
                id={item.id}
                text={item.text}
                onDelete={() => deleteItem(item.id)}
              />
            )
            )}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;

        
