import React from "react";
import "./TarotCard.css";

import { Box, Image, Paragraph } from "grommet";

const TarotCard = ({ card }) => {
  return (
    <Box className="card" align="center" justify="start" width="280px">
      <Box
      animation={{type: "pulse", duration: 13000}}>
      <Box
        className="tarot"
        animation={{ type: "fadeIn", duration: 11000 }}
        flex={{ shrink: 0 }}
      >
        <Image
          className="cardImg"
          round="small"
          fit="contain"
          src={
            card
              ? card.fields.image
              : "https://res.cloudinary.com/pecodory/image/upload/v1617241484/Tarot_Back_tnu8ro.png"
          }
        />
        </Box>
      </Box>
      <Box className="description">
      <Paragraph responsive="true" textAlign="center">
        {card ? card.fields.description : ""}
      </Paragraph>
      </Box>
    </Box>
  );
};

export default TarotCard;
