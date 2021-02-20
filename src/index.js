import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { blue, green, grey, red, yellow } from "@material-ui/core/colors";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./components/Main";
import { SnackbarProvider, useSnackbarContext } from "./contexts/snackbar";
import "./index.css";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
  colors: {
    danger: red[500],
    success: green[400],
    warning: yellow[800],
    info: blue[500],
    default: grey[300],
  },
  overrides: {
    MuiSvgIcon: {
      root: {
        transition: "color ease 0.5s",
      },
    },
  },
});

function About() {
  const { openSnackbar } = useSnackbarContext();

  useEffect(() => {
    openSnackbar({ message: "hello" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>About</div>;
}

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <Router>
            <Layout>
              <Switch>
                <Route exact path="/" component={Main}></Route>
                <Route exact path="/about" component={About}></Route>
              </Switch>
            </Layout>
          </Router>
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
