import React from "react";
import ReactDOM from "react-dom";
import App from "./Portfolio";
import { BrowserRouter as Router } from "react-router-dom";
import { ProjectsProvider } from "./scripts/ProjectsContext";

ReactDOM.render(
  <React.StrictMode>
    <ProjectsProvider>
      <Router>
        <App />
      </Router>
    </ProjectsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
