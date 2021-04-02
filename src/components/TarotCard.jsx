import React from "react";
import "./TarotCard.css";

import { Box, Image, Paragraph } from "grommet";

const TarotCard = ({ card }) => {
  return (
    <Box className="card" align="center" justify="start" width="280px">
      <Box
        className="tarot"
        animation={{ type: "pulse",type:"fadeIn", duration: 9000 }}
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
      <Paragraph responsive="true" textAlign="center">
        {card ? card.fields.description : ""}
      </Paragraph>
    </Box>
  );
};

export default TarotCard;
