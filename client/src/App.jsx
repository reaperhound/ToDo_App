import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    async function fetchTodos() {
      const response = await axios.get("http://localhost:3000/");
      setTodos(response.data);
    }

    fetchTodos();
  }, []);

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodoSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post("http://localhost:3000/", { text: newTodo });
    setTodos([...todos, response.data]);
    setNewTodo("");
  };

  const handleTodoDelete = async (id) => {
    await axios.delete(`http://localhost:3000/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };


  const div = "App flex flex-col justify-center items-center p-5"
  const div_h1 = "text-4xl p-10 font-thin"
  const form = "pb-3"
  const input = "input input-bordered input-primary  w-[450px]"
  const form_btn = "btn btn-outline ml-[87px] "
  const ul = "flex flex-col w-[650px] pl-[5px] pr-[5.5px] justify-center "
  const li = "text-lg flex font-medium justify-between pt-2 pb-2 "
  const li_btn = "btn btn-outline btn-sm"

  return (
    <div className={div}>

      <h1 className={div_h1}> Todo List </h1>
      <form className={form} 
      onSubmit={handleNewTodoSubmit}>
        
        <input 
        className={input} 
        type="text" 
        value={newTodo} 
        onChange={handleNewTodoChange} />

        <button className={form_btn}> Add Todo </button>
      </form>
      <ul className={ul} >
        {todos.map((todo) => (
          <li
          className={li}
          key={todo._id}>
            {todo.text}{" "}
            <button
            className={li_btn}
            onClick={() => 
            handleTodoDelete(todo._id)}>
              Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
