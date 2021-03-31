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
} from "grommet";
import GrommetExample from "./components/GrommetExample";
import { baseURL, baseURLTWO, config } from "./services";
import axios from "axios";

const theme = {
  global: {
    colors: {
      brand: "#328BE6"
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

  useEffect(() => {
    getCardsData();
  }, []);

  const handleAskQuestion = (question) => {
    postQuestion(question);
    pickCards();
  };

  const postQuestion = async (question) => {
    const resp = await axios.post(baseURLTWO, { fields: { question } }, config);
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
  };

  async function getCardsData() {
    try {
      let response = await axios.get(baseURL, config);
      setCards(response.data.records);
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box align="center" fill>
            <Header />

            <Form handleAskQuestion={handleAskQuestion} />

            {pastCard && presentCard && futureCard && (
              <Box>
                Past, Present, and Future 
                <Box className="cardGrid" direction="row" gap="medium">
                  <TarotCard card={pastCard} />
                  <TarotCard card={presentCard} />
                  <TarotCard card={futureCard} />
                </Box>
              </Box>
            )}

            <Route path="/list"> </Route>
            {/* <GrommetExample /> */}
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
