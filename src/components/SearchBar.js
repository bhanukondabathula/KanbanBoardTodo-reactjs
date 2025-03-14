import React, { useState } from "react";

const SearchBar = ({ tasks, setTasks }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setTasks(tasks.map(task => ({
      ...task,
      hidden: !task.title.toLowerCase().includes(e.target.value.toLowerCase())
    })));
  };

  return (
    <input type="text" placeholder="Search tasks..." value={search} onChange={handleSearch} />
  );
};

export default SearchBar;
