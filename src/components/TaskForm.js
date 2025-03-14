import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";


const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    dispatch(addTask({ title, description, status: "To Do" }));
    setTitle("");
    setDescription("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Task Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;

