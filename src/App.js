// import './App.css';
import { useEffect, useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import Header from "./components/Header";
import Form from "./components/Form";
import TarotCard from "./components/TarotCard";
import {
  Box,
  Button,
  Heading,
  Collapsible,
  Grommet,
  ResponsiveContext,
  Layer,
  Image,
  Paragraph, 
} from "grommet";
import GrommetExample from "./components/GrommetExample";
import { cardURL, readingURL, config } from "./services";
import axios from "axios";

const theme = {
  global: {
    colors: {
      brand: "#328BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
    focus: {
      outline: {
        color: "none",
      },
    },
  },
};

function App() {
  let [cards, setCards] = useState([]);
  let [pastCard, setPastCard] = useState(null);
  let [presentCard, setPresentCard] = useState(null);
  let [futureCard, setFutureCard] = useState(null);
  let [newQuestion, setNewQuestion] = useState(null);
  let [hasCards, setHasCards] = useState(false);
  let [questions, setQuestions] = useState([])
    
    
  useEffect(() => {
      getCardsData()
      getQuestions();
  }, []);

  const handleAskQuestion = (question) => {
    pickCards();
    postQuestion(question);
    };

  const postQuestion = async (question) => {
    // const resp = await axios.post(readingURL, { fields: { question, pastCardID: pastCard.id, presentCardID: presentCard.id, futureCardID: futureCard.id } }, config);
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
    console.log(response)
    setQuestions(response.data.records);

  } catch (err) {
    console.log(err.message)
  }
}

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box  align="center" fill>
            <Header />


            <Box align="center">{questions.map((question) =>
              <Box key={question.id}>
                <Paragraph>
                {question.fields.question}

                </Paragraph>
            </Box>
            )}</Box>


            <Form handleAskQuestion={handleAskQuestion} />

              
              <Box>
                <Box align="center">Past, Present, and Future</Box>
                <Box className="cardGrid" direction="row" gap="medium">
                  <TarotCard card={pastCard} />
                  <TarotCard card={presentCard} />
                  <TarotCard card={futureCard} />
                </Box>
              </Box>
              

            <Route path="/list"> </Route>
            {/* <GrommetExample /> */}
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
