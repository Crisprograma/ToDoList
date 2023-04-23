import React, { useState } from "react";

//create your first component
const Home = () => {
  const [input, setInput] = useState("");
  const [tareas, setTareas] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleAdd = () => {
    const tareaSinEspacios = input.trim();
    if (tareaSinEspacios !== "") {
      setTareas([...tareas, tareaSinEspacios]);
    }
    setInput("");
  };

  const handleDelete = (index) => {
    const tareasRestantes = tareas.filter((tarea, i) => i !== index)
    setTareas(tareasRestantes)
  };

  return (
    <div className="container-fluid">
      <h1>To Do List</h1>
      <input
        type="text"
        value={input}
        placeholder={isInputFocused ? "" : "Indica tu tarea"}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAdd();
          }
        }}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
      />
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            {" "}
            {tarea}{" "}
            <button
              type="button"
              className="eliminar btn-close"
              aria-label="Close"
              onClick={() => handleDelete(index)}
            ></button>
          </li>
        ))}
      </ul>
      <footer>{tareas.length === 0 ? '' : `${tareas.length} items left`}</footer>
    </div>
  );
};

export default Home;

