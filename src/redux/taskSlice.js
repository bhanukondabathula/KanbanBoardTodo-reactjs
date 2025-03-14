import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
};

const saveToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: loadFromLocalStorage(),
    searchQuery: "",
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveToLocalStorage(state.tasks);
    },
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) {
        task.status = status;
        saveToLocalStorage(state.tasks);
      }
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addTask, updateTaskStatus, setSearchQuery } = tasksSlice.actions;
export default tasksSlice.reducer;
