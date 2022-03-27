import React from "react";
import { CardItem, CardList } from "../card/card.styles";
import { CardAbilitiesContainer } from "./card-details-side-abilities.styles";

const CardAbilities = ({
  height,
  weight,
  types,
  objKey1,
  objKey2,
  abilities,
}) => {
  return (
    <CardAbilitiesContainer>
      <CardList width="70px" listTitle="Biometrics">
        <CardItem>
          <span>Weight: </span>
          <span>{weight}lbs</span>
        </CardItem>
        <CardItem>
          <span>Height: </span>
          <span>{height}"</span>
        </CardItem>
      </CardList>
      <CardList width="70px" listTitle="Types">
        {types.map((currentType, index) => (
          <CardItem key={index}>
            {currentType[objKey1].name[0].toUpperCase() +
              currentType[objKey1].name.substring(1)}
          </CardItem>
        ))}
      </CardList>
      <CardList width="70px" listTitle="Abilities">
        {abilities.map((currentAbility, index) => (
          <CardItem key={index}>
            {currentAbility[objKey2].name[0].toUpperCase() +
              currentAbility[objKey2].name.substring(1).replace(/-/g, " ")}
          </CardItem>
        ))}
      </CardList>
    </CardAbilitiesContainer>
  );
};

export default CardAbilities;
