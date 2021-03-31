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
  console.log(card.fields.description);
  return (
    <Box className="card" height="500px" width="280px">
      <Image fit="contain" src={card.fields.image} />
      <Paragraph textAlign="center">{card.fields.description}</Paragraph>
    </Box>
  );
};

export default TarotCard;
