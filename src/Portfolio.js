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

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
