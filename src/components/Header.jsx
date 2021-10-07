import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Menu, Icon, List } from "@material-ui/core";
import "../css/Header.css";
import { ParagraphHeader } from "./HTMLBuildHelpers";

const Header = () => {
  return (
    <AppBar id="navbar" position="static">
      <Button id="logo" component={Link} to="/" color="inherit">
        <img src="/images/logo2.png" alt="page logo"></img>
      </Button>
      <Toolbar className="toolbar">
        <List id="nav-list">
          <Button
            className="nav-button"
            component={Link}
            to="/"
            color="inherit"
          >
            {ParagraphHeader(`Home`, "primary")}
          </Button>
          <Button
            className="nav-button"
            component={Link}
            to="/blog"
            color="inherit"
          >
            {ParagraphHeader(`Blog`, "primary")}
          </Button>
          <Button
            className="nav-button"
            component={Link}
            to="/projects"
            color="inherit"
          >
            {ParagraphHeader(`Projects`, "primary")}
          </Button>
          <Button
            className="nav-button"
            component={Link}
            to="/about-me"
            color="inherit"
          >
            {ParagraphHeader(`About Me`, "primary")}
          </Button>
          <Button
            className="nav-button"
            component={Link}
            to="/contact"
            color="inherit"
          >
            {ParagraphHeader(`Contact`, "primary")}
          </Button>
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
