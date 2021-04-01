import React from "react";
import axios from "axios";
import "./Form.css";
import { TextInput, Box, Button } from "grommet";
import { useEffect, useState } from "react";
import { cardURL, config } from "../services";

export default function Form({ handleAskQuestion }) {
  const [value, setValue] = useState("");

  return (
    <Box width="medium">
      <TextInput textAlign="center"
        placeholder="What Do You Wish To Know?"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button disabled={!value} onClick={(e) => handleAskQuestion(value)} primary label="Ask" />
      {/* <Button disabled={value? false: true} onClick={(e) => handleAskQuestion(value)} primary label="Ask" /> */}
    </Box>
  );
}
