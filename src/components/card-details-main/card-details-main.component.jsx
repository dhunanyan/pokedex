import React from "react";
import { CardDetailsItems } from "../card-details-main-items/card-details-main-items.component";
import {
  CardDetailsHeader,
  CardDetailsMainContainer,
  CardDetailsMainContent,
  CardDetailsMainScroll,
} from "./card-details-main.styles";

const CardDetailsMain = ({ moves, held_items, name }) => {
  return (
    <CardDetailsMainContainer>
      <CardDetailsHeader>
        {name[0].toUpperCase() + name.substring(1).replace(/-/g, " ")}
      </CardDetailsHeader>

      <CardDetailsMainContent>
        <CardDetailsMainScroll>
          <CardDetailsItems
            map={held_items}
            objKey={"item"}
            name={"Held Items"}
            message={"No held items"}
          />
          <CardDetailsItems
            map={moves}
            objKey={"move"}
            name={"Moves"}
            message={"No moves"}
          />
        </CardDetailsMainScroll>
      </CardDetailsMainContent>
    </CardDetailsMainContainer>
  );
};

export default CardDetailsMain;
