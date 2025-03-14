import React from "react";
import KanbanBoard from "./pages/KanbanBoard";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { CssBaseline, Container, Typography } from "@mui/material";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Container maxWidth="lg">
        <header className="app-header">
          <Typography variant="h4" component="h1">
            Kanban Task Board
          </Typography>
        </header>
        <KanbanBoard />
      </Container>
    </Provider>
  );
};

export default App;
