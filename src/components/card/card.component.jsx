import React, { useState } from "react";

import {
  CardContainer,
  CardContent,
  CardDetailsButton,
  CardDetailsText,
  CardId,
  CardImg,
  CardImgContainer,
  CardItem,
  CardList,
  CardTitle,
  CardWrapper,
} from "./card.styles";

import { MdOutlineMoreHoriz as Expand } from "react-icons/md";
import CardDetails from "../card-details/card-details.component";
import { CSSTransition } from "react-transition-group";

import "./card.animations.scss";

const Card = ({ pokemon, index, appColor }) => {
  const { id, name, sprites, types, height, weight } = pokemon;
  const imageUrl = sprites.other["official-artwork"].front_default;
  const [showDetails, setShowDetails] = useState(false);

  const minimizeName = (name) =>
    name.length > 13 ? name.slice(0, 16) + "..." : name;

  return (
    <CardWrapper
      className={`pokemon__${(index % 8) + 1} pokemon-grid__${(index % 4) + 1}`}
    >
      <CSSTransition
        in={showDetails}
        timeout={250}
        classNames="details"
        unmountOnExit
      >
        <CardDetails
          pokemon={pokemon}
          name={name}
          imageUrl={imageUrl}
          types={types}
          height={height}
          weight={weight}
          appColor={appColor}
          onClick={() => setShowDetails(false)}
        />
      </CSSTransition>

      <CardContainer appColor={appColor}>
        <CardId>#{id}</CardId>
        <CardImgContainer>
          <CardImg imageUrl={imageUrl} />
        </CardImgContainer>

        <CardContent>
          <CardTitle>
            {minimizeName(
              name[0].toUpperCase() + name.substring(1).replace(/-/g, " ")
            )}
          </CardTitle>
          <CardList width={"30px"} listTitle="Bio">
            <CardItem>Weight: {weight}</CardItem>
            <CardItem>Height: {height}</CardItem>
          </CardList>
          <CardList width={"30px"} listTitle="Types">
            {types.map((currentType, index) => (
              <CardItem key={index}>
                {currentType.type.name[0].toUpperCase() +
                  currentType.type.name.substring(1)}
              </CardItem>
            ))}
          </CardList>
          <CardDetailsButton
            appColor={appColor}
            onClick={() => setShowDetails(true)}
          >
            <Expand />
            <CardDetailsText>More details</CardDetailsText>
          </CardDetailsButton>
        </CardContent>
      </CardContainer>
    </CardWrapper>
  );
};

export default Card;
