import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button component={Link}  to="/" color="inherit">
          <Typography variant="h5">Andrew's Blog</Typography>
        </Button>
        <List>
          <Button component={Link}  to="/" color="inherit">
            <Typography variant="subtitle1">Home</Typography>
          </Button>
          <Button component={Link}  to="/blog" color="inherit">
            <Typography variant="subtitle1">Blog</Typography>
          </Button>
          <Button component={Link}  to="/projects" color="inherit">
            <Typography variant="subtitle1">Projects</Typography>
          </Button>
          <Button component={Link}  to="/about-me" color="inherit">
            <Typography variant="subtitle1">About Me</Typography>
          </Button>
          <Button component={Link}  to="/contact" color="inherit">
            <Typography variant="subtitle1">Contact</Typography>
          </Button>
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
