import React from "react";
import { useState } from "react";
import { TextInput, Box } from "grommet";

export default function Form() {
  const [value, setValue] = useState("");
  return (
    <Box
      align="center"
      justify="center"
      width="medium">
      <TextInput
        size="small"
        placeholder="type here"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </Box>
  );
}
