import React from "react";
import { Link } from "react-router-dom";
import { Box } from "grommet";
import "./Header.css"



export default function Header() {
  return (
    <div>
      <Box className="ask" >
        <Link to="/">Ask</Link>
      </Box>
      <Box className="peer">
        <Link to="/list">Peer</Link>
      </Box>
    </div>
  );
}
