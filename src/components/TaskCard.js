import React from "react";
import { useDrag } from "react-dnd";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const TaskCard = ({ task }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Card ref={drag} className={`task-card ${isDragging ? "dragging" : ""}`}>
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2">{task.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
