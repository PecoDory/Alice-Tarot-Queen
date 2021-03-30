import React from "react";
import axios from "axios";
import "./Form.css";
import { TextInput, Box, Button } from "grommet";
import { useEffect, useState } from "react";
import { baseURL, config } from "../services";



export default function Form({handleAskQuestion}) {
  const [value, setValue] = useState("");
  
  
  

  return (
    
    <Box align="center" justify="center" width="medium">
      <TextInput
        placeholder=""
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button onClick={(e) => handleAskQuestion(value)} primary label="label" />
      
    </Box>
    
  );
  
}
