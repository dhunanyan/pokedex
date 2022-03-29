import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatsStart } from "../../redux/cards/cards.actions";
import { selectStatsForPreview } from "../../redux/cards/cards.selectors";
import CardDetailsMain from "../card-details-main/card-details-main.component";
import CardDetailsSide from "../card-details-side/card-details-side.component";
import {
  CardDetailsContainer,
  CardDetailsFixed,
  CardDetailsLayout,
  CardDetailsWrapper,
} from "./card-details.styles";

const CardDetails = ({
  name,
  types,
  height,
  weight,
  imageUrl,
  pokemon,
  onClick,
  appearDetails,
  appColor,
}) => {
  const { moves, stats, abilities, held_items, base_experience } = pokemon;

  const dispatch = useDispatch();
  const statsDetails = useSelector(selectStatsForPreview);

  useEffect(() => {
    dispatch(fetchStatsStart());
    document.body.style.overflow = "hidden";
  }, [dispatch]);

  return (
    <CardDetailsFixed>
      <CardDetailsWrapper>
        <CardDetailsLayout
          onClick={() => {
            onClick();
            document.body.style.overflow = "auto";
          }}
        />
        <CardDetailsContainer>
          <CardDetailsSide
            appColor={appColor}
            onClick={() => {
              onClick();
              document.body.style.overflow = "auto";
            }}
            imageUrl={imageUrl}
            stats={stats}
            types={types}
            weight={weight}
            height={height}
            abilities={abilities}
            base_experience={base_experience}
          />
          <CardDetailsMain
            appColor={appColor}
            held_items={held_items}
            moves={moves}
            name={name}
            statsDetails={statsDetails}
          />
        </CardDetailsContainer>
      </CardDetailsWrapper>
    </CardDetailsFixed>
  );
};

export default CardDetails;
