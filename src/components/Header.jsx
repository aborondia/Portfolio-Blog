import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import '../css/Header.css';
import Button from "@material-ui/core/Button";
import { ParagraphHeader } from "./HTMLBuildHelpers";

const Header = () => {
  return (
    <AppBar id='navbar' position="static">
        <Button id='logo' component={Link} to="/" color="inherit">
          <img src='/images/logo2.png' alt='page logo'></img>
        </Button>
      <Toolbar className='toolbar'>
        <List>
          <Button component={Link} to="/" color="inherit">
            {ParagraphHeader(`Home`)}
          </Button>
          <Button component={Link} to="/blog" color="inherit">
            {ParagraphHeader(`Blog`)}
          </Button>
          <Button component={Link} to="/projects" color="inherit">
            {ParagraphHeader(`Projects`)}
          </Button>
          <Button component={Link} to="/about-me" color="inherit">
            {ParagraphHeader(`About Me`)}
          </Button>
          <Button component={Link} to="/contact" color="inherit">
            {ParagraphHeader(`Contact`)}
          </Button>
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
