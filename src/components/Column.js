import React from "react";
import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";
import { useDispatch } from "react-redux";
import { updateTaskStatus } from "../redux/taskSlice";

const Column = ({ status, tasks }) => {
  const dispatch = useDispatch();

  const [, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => dispatch(updateTaskStatus({ id: item.id, status })),
  }));

  return (
    <div ref={drop} className="column">
      <h3>{status}</h3>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;

