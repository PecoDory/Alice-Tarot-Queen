import React from "react";
import axios from "axios";
import "./Form.css";
import { TextInput, Box } from "grommet";
import { useEffect, useState } from "react";
import { baseURL, config } from "../services";

export default function Form() {
  const [value, setValue] = useState("");
  let [cards, setCards] = useState([]);

  useEffect(() => {
    getCardsData();
  }, []);

  let cardsDrawn = []

  // async function getPokemon() {
  //   try {
  //     console.log("getPokemon");
  //     for (let i = 1; i <= 6; i++) {
  //       console.log(`${url}${i}`);
  //       //make random num
  //       let randomPkmn = getRandomNumber(151);
  //       console.log(randomPkmn);
  //       //api call for pkmn
  //       const response = await axios.get(`${url}${randomPkmn}`);
  //       console.log(response.data);
  //       wildPkmn.push(response.data);
  //       wildPkmn.push(response.data);
  //     }
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  //   console.log(wildPkmn);
  // }

  async function getCardsData() {
    try {
      for (let i = 1; i < 3; i++) {
        let randomCard = getRandomNumber(22);
        let response = await axios.get(baseURL, config, randomCard);
      setCards(response.data.records);
      console.log(response);
      cardsDrawn.push(response.data.records)

      }
    } catch (err) {
      console.log(err.message)
    }
    console.log(cardsDrawn)
  }

  return (
    <div>
      <div className="cardGrid">
        {cards.map((card) => {
          return <img src={card.fields.image} key={card.id} />;
        })}
      </div>
    </div>

    

    // <Box align="center" justify="center" width="medium">
    //   <TextInput
    //     placeholder=""
    //     value={value}
    //     onChange={(event) => setValue(event.target.value)}
    //   />
    // </Box>
  );
  function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
