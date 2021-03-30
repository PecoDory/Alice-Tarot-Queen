// import './App.css';
import { useEffect, useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import Header from "./components/Header";
import Form from "./components/Form";
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
import { FormClose, Notification } from "grommet-icons";
import GrommetExample from "./components/GrommetExample";
import { baseURL, config } from "./services";
import axios from "axios";

const theme = {
  global: {
    colors: {
      brand: "#328BE6",
      // border:"purple"
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
    focus: {
      outline: {
        color: "violet",
      },
      // shadow: {
      //   color: "blue"
      // }
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
    console.log("post question");
    console.log(question);
    //const response = await axios.post
    //make axios .post call

    //response as new question state
    setNewQuestion(question);
  };

  const pickCards = () => {
    const cardDeck = cards;

    //get random index

    //remove card from cardDeck at random index

    setPastCard(cards[0]);
    setPresentCard(cards[1]);
    setFutureCard(cards[2]);
    console.log("pick cards");
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
  console.log(pastCard);
  console.log(presentCard);
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <Header />
            <Form handleAskQuestion={handleAskQuestion} />

            {pastCard && presentCard && futureCard && (
              <Box>
                {/* if this is true if this is true if this is true stop make box (always in brackets conditional rendering) */}
                <Box className="cardGrid" direction="row" gap="medium">
                  <Box >
                    <Image
                      
                      fit="cover"
                      src={pastCard.fields.image}
                      key={pastCard.id}
                    />
                  </Box>
                  <Box >
                    <Image
                      fit="cover"
                      src={presentCard.fields.image}
                      key={presentCard.id}
                    />
                  </Box>
                  <Box >
                    <Image
                      fit="cover"
                      src={futureCard.fields.image}
                      key={futureCard.id}
                    />
                  </Box>
                </Box>
              </Box>
            )}

            {/* <Route path="/list" </Route> */}
            {/* <GrommetExample /> */}
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
