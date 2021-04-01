import React from "react";
import axios from "axios";
import { cardURL, readingURL, config } from "../services";
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

import { useEffect, useState } from "react";

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
    <div>
      <Box align="center">
        {questions.map((question) => (
          <Box key={question.id}>
            <Paragraph>{question.fields.question}</Paragraph>
          </Box>
        ))}
      </Box>
    </div>
  );
}
