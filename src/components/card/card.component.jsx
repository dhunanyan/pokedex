import React, { useState } from "react";

import { useSelector } from "react-redux";

import { BeatLoader } from "react-spinners";

import {
  CardContainer,
  CardContent,
  CardDetailsButton,
  CardDetailsText,
  CardId,
  CardImg,
  CardItem,
  CardList,
  CardLoading,
  CardLoadingContainer,
  CardTitle,
  CardWrapper,
} from "./card.styles";

import { MdOutlineMoreHoriz as Expand } from "react-icons/md";
import CardDetails from "../card-details/card-details.component";
import { CSSTransition } from "react-transition-group";

import "./card.animations.scss";
import { selectIsCardsFetching } from "../../redux/cards/cards.selectors";

const Card = ({ pokemon }) => {
  const { id, name, sprites, types, height, weight } = pokemon;
  const imageUrl = sprites.other["official-artwork"].front_default;
  const [showDetails, setShowDetails] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const isCardFetching = useSelector(selectIsCardsFetching);

  return (
    <CardWrapper>
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
          onClick={() => setShowDetails(false)}
        />
      </CSSTransition>

      {isCardFetching ? (
        <BeatLoader color={"#4267b2"} loading={isCardFetching} size={15} />
      ) : (
        <CardContainer>
          <CardId>#{id}</CardId>
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
              <CardDetailsText>More details</CardDetailsText>
            </CardDetailsButton>
          </CardContent>
        </CardContainer>
      )}
    </CardWrapper>
  );
};

export default Card;
