import React, { useState } from "react";
import List from "./List";

function App() {

  const [item, setItem] = useState("");

  const [itemArray, setItemArray] = useState([]);

  const handleChange=(evt)=>{
    setItem(evt.target.value);
  }

  const handleClick=(evt)=>{
    setItemArray((prevstate)=>{
      return([...prevstate, item]);
    });
    setItem("");
  }

  const deleteFromItemArray = (id)=>{
    
    const updItemArray = itemArray.filter((element, index)=>{
      return (index!==id);
    });

    setItemArray(updItemArray);

  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={item}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {
            itemArray.map((element, index)=>{
            console.log(`${index} ${element}`);
            return(<List 
                    key={index}
                    id={index}
                    item={element} 
                    func={deleteFromItemArray}/>);
          })}
          
        </ul>
      </div>
    </div>
  );
}

export default App;

