import { Box, Paragraph } from "grommet";
import Form from "./Form";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { cardURL, readingURL, config } from "../services";
import TarotCard from "./TarotCard";
import "./Home.css";

export default function Home() {
  let [pastCard, setPastCard] = useState(null);
  let [presentCard, setPresentCard] = useState(null);
  let [futureCard, setFutureCard] = useState(null);
  let [newQuestion, setNewQuestion] = useState(null);
  let [hasCards, setHasCards] = useState(false);
  let [questions, setQuestions] = useState([]);
  let [cards, setCards] = useState([]);

  async function getCardsData() {
    try {
      let response = await axios.get(cardURL, config);
      setCards(response.data.records);
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function getQuestions() {
    try {
      let response = await axios.get(readingURL, config);
      console.log(response);
      setQuestions(response.data.records);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getCardsData();
    getQuestions();
  }, []);

  const postQuestion = async (question) => {
    const resp = await axios.post(readingURL, { fields: { question } }, config);
    console.log(resp);
    setNewQuestion(question);
  };

  const pickCards = () => {
    const cardDeck = [...cards];
    cardDeck.sort((a, b) => Math.random() - 0.5);
    console.log(cardDeck);
    setPastCard(cardDeck[0]);
    setPresentCard(cardDeck[1]);
    setFutureCard(cardDeck[2]);
    setHasCards(true);
  };

  const handleAskQuestion = (question) => {
    pickCards();
    postQuestion(question);
  };

  return (
    <>
      <Form handleAskQuestion={handleAskQuestion} />

      <Box >
        <Box className="cardGrid" direction="row" gap="medium">
          <Box className="time" alignContent="center">Past
          <TarotCard card={pastCard} />
          </Box>
          <Box className="time" alignContent="center">Present
          <TarotCard card={presentCard} />
          </Box>
          <Box className="time" alignContent="center">Future
          <TarotCard card={futureCard} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
