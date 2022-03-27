import React, { useState } from "react";
import {
  CardDetailsItem,
  CardDetailsItemsContainer,
  CardDetailsItemsList,
  CardDetailsMainSubitle,
  CardDetailsNoItem,
} from "../../global.styles";
import {
  CardDetailsItemsButton,
  CardDetailsItemsButtonContainer,
  CardDetailsItemsWrapper,
} from "./card-details-main-items.styles";

import { IoIosArrowDown as Arrow } from "react-icons/io";

export const CardDetailsItems = ({ map, objKey, name, message }) => {
  const [showMore, setShowMore] = useState(false);
  console.log(name);
  return (
    <CardDetailsItemsContainer name={name}>
      <CardDetailsMainSubitle name={name}>{name}</CardDetailsMainSubitle>
      <CardDetailsItemsList showMore={showMore} name={name}>
        {map.length ? (
          map.map((currentItem) => (
            <CardDetailsItem>
              {currentItem[objKey].name[0].toUpperCase() +
                currentItem[objKey].name.substring(1).replace(/-/g, " ")}
            </CardDetailsItem>
          ))
        ) : (
          <CardDetailsNoItem>{message}</CardDetailsNoItem>
        )}
      </CardDetailsItemsList>
      {map.length > 5 ? (
        <CardDetailsItemsButtonContainer onClick={() => setShowMore(!showMore)}>
          <CardDetailsItemsButton showMore={showMore}>
            <Arrow />
          </CardDetailsItemsButton>
        </CardDetailsItemsButtonContainer>
      ) : null}
    </CardDetailsItemsContainer>
  );
};
