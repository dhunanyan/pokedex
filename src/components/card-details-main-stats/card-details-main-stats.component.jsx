import React, { useState } from "react";
import {
  CardDetailsItem,
  CardDetailsItemsContainer,
  CardDetailsItemsList,
  CardDetailsMainSubitle,
  CardDetailsMainSubSubSubtitle,
  CardDetailsMainSubSubtitle,
  CardDetailsNoItem,
} from "../../global.styles";
import {
  CardDetailsItemsButton,
  CardDetailsItemsButtonContainer,
} from "./card-details-main-stats.styles";

import { IoIosArrowDown as Arrow } from "react-icons/io";

const mapMoves = (map, objKey1, objKey2, objKey3, objKey4, appColor) =>
  map[objKey1][objKey2].length ? (
    map[objKey1][objKey2].map((currentItem, index) => (
      <CardDetailsItem appColor={appColor} key={index}>
        {currentItem[objKey3][objKey4][0].toUpperCase() +
          currentItem[objKey3][objKey4].substring(1).replace(/-/g, " ")}
      </CardDetailsItem>
    ))
  ) : (
    <CardDetailsNoItem>
      {`No ${
        objKey1[0].toUpperCase() +
        objKey1.substring(1).replace(/_/g, `(${objKey2}) `)
      }`}
    </CardDetailsNoItem>
  );

const mapNatures = (map, objKey1, objKey2, objKey3, appColor) =>
  map[objKey1][objKey2].length ? (
    map[objKey1][objKey2].map((currentItem, index) => (
      <CardDetailsItem appColor={appColor} key={index}>
        {currentItem[objKey3][0].toUpperCase() +
          currentItem[objKey3].substring(1).replace(/-/g, " ")}
      </CardDetailsItem>
    ))
  ) : (
    <CardDetailsNoItem>
      {`No ${
        objKey1[0].toUpperCase() +
        objKey1.substring(1).replace(/_/g, `(${objKey2}) `)
      }`}
    </CardDetailsNoItem>
  );

export const CardDetailsStats = ({
  map,
  objKey,
  name,
  message,
  moves,
  movesType,
  affectingKey,
  increaseName,
  appColor,
}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <CardDetailsItemsContainer>
      {map.move_damage_class ? (
        <CardDetailsMainSubSubtitle>
          {map.move_damage_class.name}
        </CardDetailsMainSubSubtitle>
      ) : null}
      <CardDetailsMainSubitle appColor={appColor}>
        {name}
      </CardDetailsMainSubitle>

      <CardDetailsItemsList showMore={showMore}>
        {increaseName
          ? mapMoves(
              map,
              moves,
              movesType,
              affectingKey,
              increaseName,
              appColor
            )
          : mapNatures(map, moves, movesType, affectingKey, appColor)}
      </CardDetailsItemsList>

      {map[moves][movesType].length > 5 ? (
        <CardDetailsItemsButtonContainer
          appColor={appColor}
          onClick={() => setShowMore(!showMore)}
        >
          <CardDetailsItemsButton showMore={showMore}>
            <Arrow />
          </CardDetailsItemsButton>
        </CardDetailsItemsButtonContainer>
      ) : null}
    </CardDetailsItemsContainer>
  );
};
