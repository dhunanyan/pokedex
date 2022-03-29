import React from "react";
import {
  CardStat,
  CardStatDescr,
  CardStatOverflow,
  CardStatsContainer,
  CardStatTitle,
} from "./card-details.side-stats.styles";

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

const CardStats = ({ stats, appColor }) => {
  const iconArr = [
    [<Heart />, "#e7525b"],
    [<HandSword />, "#3a9bdc"],
    [<Shield />, "#aaaaaa"],
    [<Sword />, "#ff7619"],
    [<SpecialShield />, "#747474"],
    [<Bolt />, "#f9d71c"],
  ];

  return (
    <CardStatsContainer>
      {stats.map((currentStat, index) => (
        <CardStat key={index} iconColor={iconArr[index][1]}>
          {iconArr[index][0]}
          <CardStatOverflow perc={currentStat.base_stat} appColor={appColor}>
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
    </CardStatsContainer>
  );
};

export default CardStats;
