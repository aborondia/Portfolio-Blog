import React from "react";
import ReactDOM from "react-dom";
import App from "./Portfolio";
import { BrowserRouter as Router } from "react-router-dom";
import { ProjectsProvider } from "./scripts/ProjectsContext";
import { TextBlocksProvider } from "./scripts/TextBlocksContext";

ReactDOM.render(
  <React.StrictMode>
    <ProjectsProvider>
      <TextBlocksProvider>
        <Router>
          <App />
        </Router>
      </TextBlocksProvider>
    </ProjectsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
