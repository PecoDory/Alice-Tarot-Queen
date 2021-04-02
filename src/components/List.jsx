import React from "react";
import axios from "axios";
import { readingURL, config } from "../services";
import { Box, Paragraph, Carousel, Grommet } from "grommet";
import { useEffect, useState } from "react";
import "./List.css"


export default function List() {
  let [questions, setQuestions] = useState([]);
  let [newQuestion, setNewQuestion] = useState(null);

  useEffect(() => {
    getQuestions();
  }, []);

  const postQuestion = async (question) => {
    const resp = await axios.post(readingURL, { fields: { question } }, config);
    console.log(resp);
    setNewQuestion(question);
  };

  async function getQuestions() {
    try {
      let response = await axios.get(readingURL, config);
      console.log(response);
      setQuestions(response.data.records);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <Grommet className="listBox">
      <Box
        animation={{
          type: "rotateLeft",
          
          duration: 40000,
        }}
      >
        <Box align="center" className="questions">
          {questions.map((question) => (
            <Box
              key={question.id}
              animation={{ type: "jiggle",type:"fadeOut", duration: 40000 }}
              align="stretch"
            >
              <Paragraph>{question.fields.question}</Paragraph>

            </Box>
          ))}
        </Box>
        </Box>
    </Grommet>
  );
}
