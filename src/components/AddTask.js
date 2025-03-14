import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import { Button, Dialog, DialogActions, DialogContent, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddTask = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (title.trim()) {
      dispatch(addTask({ id: Date.now(), title, description, status: "To Do" }));
      setTitle("");
      setDescription("");
      setOpen(false);
    }
  };

  return (
    <>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => setOpen(true)} 
        className="add-task-btn"
      >
        <AddIcon /> Add Task
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <TextField 
            fullWidth 
            label="Task Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextField 
            fullWidth 
            label="Task Description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleAddTask} color="primary">Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddTask;
