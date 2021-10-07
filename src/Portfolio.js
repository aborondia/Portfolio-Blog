import "./css/App.css";
import Header from "./components/Header";
import Blog from "./components/Blog";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Post from "./components/Post";
import "./css/Post.css";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inconsolata",
    "fontWeightExtra-light": 200,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    "fontWeightSemi-bold": 600,
    "fontWeightBold": 700,
    "fontWeightExtra-bold": 800,
    "fontWeightBlack": 900,
  },

});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/blog">
            <Blog />
          </Route>

          <Route exact path="/projects">
            <Projects />
          </Route>

          <Route exact path="/about-me">
            <AboutMe />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route path="/blog/post">
            <Post />
          </Route>
        </Switch>
      </main>
    </ThemeProvider>
  );
};

export default App;
