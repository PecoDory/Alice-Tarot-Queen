import React from "react";
import {
  Box,
  Button,
  Heading,
  Collapsible,
  Grommet,
  ResponsiveContext,
  Layer,
  Image,
  Text,
  Paragraph,
} from "grommet";

const TarotCard = ({ card }) => {
  return (
    <Box className="card" align="center"height="500px" width="280px" round="large">
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
      <Paragraph responsive="true" textAlign="center">{card ? card.fields.description: ""}</Paragraph>
    </Box>
  );
};

export default TarotCard;
