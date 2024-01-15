import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@material-ui/core";
import "../css/Header.css";
import { Title } from "./HTMLBuildHelpers";
import Bio from "./Bio";

const Header = () => {
  return (
    <AppBar
      id="navbar"
      className="header"
      position="static"
    >
      <Toolbar
        id="toolbar"
        disableGutters={true}
        className="toolbar"
      >
        <Bio bioType={{ type: "nav-bio" }} />
        <Box
          id="nav-list"
          className="nav-list"
        >
          <Button
            className="nav-button"
            component={Link}
            to="/"
            color="inherit"
          >
            {Title(`Home`, "h3")}
          </Button>
          {/* <Button
            className="nav-button"
            component={Link}
            to="/blog"
            color="inherit"
          >
            {Title(`Blog`, "h3")}
          </Button> */}
          <Button
            className="nav-button"
            component={Link}
            to="/projects"
            color="inherit"
          >
            {Title(`Projects`, "h3")}
          </Button>
          {/* <Button
            className="nav-button"
            component={Link}
            to="/about-me"
            color="inherit"
          >
            {Title(`About Me`, "h3")}
          </Button> */}
          <Button
            className="nav-button"
            component={Link}
            to="/contact"
            color="inherit"
          >
            {Title(`Contact`, "h3")}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
