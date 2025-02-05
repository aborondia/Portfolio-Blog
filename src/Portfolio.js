import "./css/App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Contact from "./components/Contact";
import "./css/Post.css";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", "Open Sans", sans-serif',
    "fontWeightExtra-light": 200,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    "fontWeightSemi-bold": 600,
    fontWeightBold: 700,
    "fontWeightExtra-bold": 800,
    fontWeightBlack: 900,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <main className="main">
        <Switch>
          <Route
            exact
            path="/"
          >
            <Header />
            <Main />
          </Route>
          <Route
            exact
            path="/projects"
          >
            <Header />
            <Projects />
          </Route>
          <Route
            exact
            path="/contact"
          >
            <Header />
            <Contact />
          </Route>
          {/* <Route path="/unity-container">
            <UnityContainer />
          </Route> */}
        </Switch>
      </main>
    </ThemeProvider>
  );
};

// const UnityApp = () => {
//   useEffect(() => {
//     // Redirect to the Unity build
//     window.location.href = "/unity-build/index.html";
//   }, []);
// };

export default App;
