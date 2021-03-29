import React from "react";
import { TextInput, Box } from "grommet";
import { useEffect, useState } from "react";





export default function Form() {
  const [value, setValue] = useState("");
  let [cards, setCards] = useState([]);


  useEffect(() => {
    getCards();
  }, []);

  async function getCards() {
    let response = await axios.get(
      https://api.airtable.com/v0/appWckoNu6Y3xzoi6/Tarot?api_key=key3lFPlQyOhoC8kq
    );
    setCards(response.data);
    console.log(setCards)
  }


  return (
    <Box align="center" justify="center" width="medium">
      <TextInput
        placeholder="type here"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </Box>
  );
}
