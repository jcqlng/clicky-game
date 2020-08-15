import React from "react";
import "../styles/characterItem.css";

const CharacterItem = props => {
  // Destructure props
  const { image, id, name } = props.character;

  return (
    <img
      className="card"
      src={image}
      alt={name}
      onClick={() => props.handleClickEvent(id)}
    />
  );
};

export default CharacterItem;
