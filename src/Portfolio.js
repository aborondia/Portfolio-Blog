import "./css/App.css";
import Header from "./components/Header";
import Blog from "./components/Blog";
import AboutMe from "./components/AboutMe";
import RecentPosts from "./components/RecentPosts";
import Projects from "./components/Projects";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Contact from './components/Contact';
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

          <Route  exact path="/recent-posts">
            <RecentPosts />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/about-me">
            <AboutMe/>
          </Route>

          <Route path="/contact"><Contact /></Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
