import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import { Box, Grommet, ResponsiveContext } from "grommet";
import List from "./components/List";
import Home from "./components/Home";

const theme = {
  global: {
    colors: {
      
    },
    font: {
      family: "Italianno",
      size: "34px",
      height: "20px",
    },
    focus: {
      outline: {
        color: "none",
      },
    },
  },
};

function App() {
  return (
    <Grommet className="App"
      background={{
        image: `url(./images/cloud-background1.jpg)`,
        opacity: "strong",
        
      }}
      theme={theme}
      full
    >
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box align="center" fill>
            <Header />

            <Switch>
              <Route component={List} exact path="/list" />
              <Route component={Home} path="/"></Route>
            </Switch>

          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
