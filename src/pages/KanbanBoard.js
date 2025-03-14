import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/taskSlice";
import Column from "../components/Column";
import AddTask from "../components/AddTask";
import { TextField } from "@mui/material";

const statuses = ["To Do", "In Progress", "Peer Review", "Done"];

const KanbanBoard = () => {
  const dispatch = useDispatch();
  const { tasks, searchQuery } = useSelector((state) => state.tasks);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="kanban-board">
      <TextField 
        label="Search Tasks..." 
        variant="outlined"
        fullWidth
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
      <div className="columns">
        {statuses.map((status) => (
          <Column key={status} status={status} tasks={filteredTasks.filter((t) => t.status === status)} />
        ))}
      </div>
      <AddTask />
    </div>
  );
};

export default KanbanBoard;
