import React, { useState } from "react";
import {
  CardContainer,
  CardContent,
  CardDetailsButton,
  CardDetailsText,
  CardImg,
  CardItem,
  CardList,
  CardTitle,
  CardWrapper,
} from "./card.styles";

import { MdOutlineMoreHoriz as Expand } from "react-icons/md";
import CardDetails from "../card-details/card-details.component";

const Card = ({ pokemon }) => {
  const { name, sprites, types, height, weight } = pokemon;

  const imageUrl = sprites.other["official-artwork"].front_default;

  const [showDetails, setShowDetails] = useState(false);

  return (
    <CardWrapper>
      {showDetails ? (
        <CardDetails
          pokemon={pokemon}
          name={name}
          imageUrl={imageUrl}
          types={types}
          height={height}
          weight={weight}
          onClick={() => setShowDetails(false)}
        />
      ) : null}

      <CardContainer>
        <CardImg imageUrl={imageUrl} />
        <CardContent>
          <CardTitle>{name[0].toUpperCase() + name.substring(1)}</CardTitle>
          <CardList listTitle="Biometrics">
            <CardItem>Weight: {weight}</CardItem>
            <CardItem>Height: {height}</CardItem>
          </CardList>
          <CardList listTitle="Abilities">
            {types.map((currentType, index) => (
              <CardItem key={index}>
                {currentType.type.name[0].toUpperCase() + name.substring(1)}
              </CardItem>
            ))}
          </CardList>
          <CardDetailsButton onClick={() => setShowDetails(true)}>
            <Expand />
            <CardDetailsText>Show details</CardDetailsText>
          </CardDetailsButton>
        </CardContent>
      </CardContainer>
    </CardWrapper>
  );
};

export default Card;
