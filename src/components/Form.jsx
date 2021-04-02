import React from "react";
import "./Form.css";
import { TextInput, Box, Button } from "grommet";
import { useEffect, useState } from "react";

export default function Form({ handleAskQuestion }) {
  const [value, setValue] = useState("");

  return (
    <Box pad="">
      <Box className="input">
        <TextInput
          textAlign="center"
          size="medium"
          placeholder="?"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Box>
      <Box >
        <Button className="button"
          color="lavender"
          size="large"
          disabled={!value}
          onClick={(e) => handleAskQuestion(value)}
          primary
          label="into the aether..."
        />
      </Box>
    </Box>
  );
}
