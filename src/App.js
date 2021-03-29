// import './App.css';
import { useEffect, useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import Header from "./components/Header";
import Form from "./components/Form";
import {Box,Button,Heading,Collapsible,Grommet,ResponsiveContext,Layer,} from "grommet";
import { FormClose, Notification } from "grommet-icons";
import GrommetExample from "./components/GrommetExample";

const theme = {
  global: {
    colors: {
      brand: "#328BE6",
      // border:"purple"
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
    focus: {
      outline: {
        color: "violet",
      },
      // shadow: {
      //   color: "blue"
      // }
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <Header />
            <Form />

            {/* <Route path="/list" </Route> */}
            {/* <GrommetExample /> */}
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
