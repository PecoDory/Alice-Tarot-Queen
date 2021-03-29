import { useEffect, useState } from "react";

import React from "react";
import {
  Box,
  Button,
  Heading,
  Collapsible,
  Grommet,
  ResponsiveContext,
  Layer,
} from "grommet";
import { FormClose, Notification } from "grommet-icons";

const GrommetExample = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <ResponsiveContext.Consumer>

      {(size) => (
        <>
      <AppBar>
        <Heading level="3" margin="none">
            Alice Tarot Queen
        </Heading>
        <Button
          icon={<Notification />}
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
        />
      </AppBar>
      <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
        <Box flex align="center" justify="center">
            app body
        </Box>
        {!showSidebar || size !== "small" ? (
          <Collapsible direction="horizontal" open={showSidebar}>
            {" "}
            <Box
              flex
              width="300px"
              background="light-2"
              elevation="small"
              align="center"
              justify="center"
            >
                sidebar
            </Box>
          </Collapsible>
        ) : (
          <Layer>
            <Box
              background="light-2"
              tag="header"
              justify="end"
              align="center"
              direction="row"
            >
              <Button
                icon={<FormClose />}
                onClick={() => setShowSidebar(false)}
              />
            </Box>
          </Layer>
        )}
      </Box>
        </>
      )}

      </ResponsiveContext.Consumer>

  );
};

export default GrommetExample;
const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);
