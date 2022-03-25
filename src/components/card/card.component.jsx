import React from "react";

const Card = ({ pokemon }) => {
  const { id, name, sprites, type, height, weight } = pokemon;

  const image = sprites.other["official-artwork"].front_default;

  return (
    <div>
      <img
        src={image}
        alt="Pokemon
  "
      />
    </div>
  );
};

export default Card;
