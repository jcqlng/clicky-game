import React from "react";

// Stateless Function
const Header = () => {
  return (
    <div className="header-container">
      <h1>Clicky Game</h1>
      <h2>
        Click on an image to score points. The game ends when you click on the
        same image twice.
      </h2>
    </div>
  );
};

export default Header;