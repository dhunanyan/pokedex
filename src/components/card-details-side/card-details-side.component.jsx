import React from "react";
import { CardItem, CardList } from "../card/card.styles";
import {
  CardDetailsExp,
  CardDetailsImg,
  CardDetailsImgContainer,
  CardDetailsSideContainer,
  CardDetailsSideContent,
  CardDetailsTimes,
} from "./card-details-side.styles";

import { IoClose as Close } from "react-icons/io5";

import CardAbilities from "../card-details-side-abilities/card-details-side-abilities.component";
import CardStats from "../card-details-side-stats/card-details-side-stats.component";

const CardDetailsSide = ({
  onClick,
  imageUrl,
  stats,
  types,
  weight,
  height,
  abilities,
  base_experience,
  appColor,
}) => {
  return (
    <CardDetailsSideContainer appColor={appColor}>
      <CardDetailsTimes onClick={onClick}>
        <Close />
      </CardDetailsTimes>
      <CardDetailsImgContainer>
        <CardDetailsImg imageUrl={imageUrl} />
        <CardDetailsExp>EXP {base_experience}</CardDetailsExp>
      </CardDetailsImgContainer>

      <CardDetailsSideContent>
        <CardStats stats={stats} objKey="base_stat" appColor={appColor} />

        <CardAbilities
          height={height}
          weight={weight}
          types={types}
          abilities={abilities}
          objKey1="type"
          objKey2="ability"
        />
      </CardDetailsSideContent>
    </CardDetailsSideContainer>
  );
};

export default CardDetailsSide;
