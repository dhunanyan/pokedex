import React from "react";
import { CardItem, CardList } from "../card/card.styles";
import {
  CardAbilities,
  CardDetailsImg,
  CardDetailsImgContainer,
  CardDetailsSideContainer,
  CardDetailsSideContent,
  CardDetailsTimes,
  CardStat,
  CardStatDescr,
  CardStatOverflow,
  CardStats,
  CardStatTitle,
} from "./card-details-side.styles";

import { IoClose as Close } from "react-icons/io5";
import {
  AiFillHeart as Heart,
  AiFillThunderbolt as Bolt,
} from "react-icons/ai";
import {
  GiDrippingSword as Sword,
  GiSwordBrandish as HandSword,
  GiMagicShield as SpecialShield,
} from "react-icons/gi";
import { BsFillShieldFill as Shield } from "react-icons/bs";

const CardDetailsSide = ({
  onClick,
  imageUrl,
  stats,
  types,
  weight,
  height,
  abilities,
}) => {
  const iconArr = [
    [<Heart />, "#e7525b"],
    [<HandSword />, "#3a9bdc"],
    [<Shield />, "#aaaaaa"],
    [<Sword />, "#ff7619"],
    [<SpecialShield />, "#747474"],
    [<Bolt />, "#f9d71c"],
  ];

  return (
    <CardDetailsSideContainer>
      <CardDetailsTimes onClick={onClick}>
        <Close />
      </CardDetailsTimes>
      <CardDetailsImgContainer>
        <CardDetailsImg imageUrl={imageUrl} />
      </CardDetailsImgContainer>

      <CardDetailsSideContent>
        <CardStats>
          {stats.map((currentStat, index) => (
            <CardStat key={index} iconColor={iconArr[index][1]}>
              {iconArr[index][0]}
              <CardStatOverflow perc={currentStat.base_stat}>
                <CardStatTitle>
                  {(
                    currentStat.stat.name[0].toUpperCase() +
                    currentStat.stat.name.substring(1)
                  ).replace(/-/g, " ")}
                </CardStatTitle>
                <CardStatDescr>{currentStat.base_stat}</CardStatDescr>
              </CardStatOverflow>
            </CardStat>
          ))}
        </CardStats>

        <CardAbilities>
          <CardList listTitle="Biometrics">
            <CardItem>
              <span>Weight: </span>
              <span>{weight}lbs</span>
            </CardItem>
            <CardItem>
              <span>Height: </span>
              <span>{height}"</span>
            </CardItem>
          </CardList>
          <CardList listTitle="Types">
            {types.map((currentType, index) => (
              <CardItem key={index}>
                {currentType.type.name[0].toUpperCase() +
                  currentType.type.name.substring(1)}
              </CardItem>
            ))}
          </CardList>
          <CardList listTitle="Abilities">
            {abilities.map((currentAbility, index) => (
              <CardItem key={index}>
                {currentAbility.ability.name[0].toUpperCase() +
                  currentAbility.ability.name.substring(1).replace(/-/g, " ")}
              </CardItem>
            ))}
          </CardList>
        </CardAbilities>
      </CardDetailsSideContent>
    </CardDetailsSideContainer>
  );
};

export default CardDetailsSide;
