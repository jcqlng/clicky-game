import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "../styles/navbar.css";

const NavBar = props => {
  console.log("Nav bar props", props);
  // Destructure props
  const { score, highScore, message, match } = props;

  return (
    <Navbar className="navbar-container" fixed="top">
      <Navbar.Text className="d-flex w-50 order-0 nav-title">
        Clicky Game
      </Navbar.Text>
      <Navbar.Text className="d-flex w-50 justify-content-center order-2">
        <span
          className={
            score === 0 && props.match === false
              ? "grey"
              : match
              ? "red"
              : "green"
          }
        >
          {message}
        </span>
      </Navbar.Text>
      <Navbar.Text className="navbar-text  mt-1 w-50 text-right order-1 order-md-last">
        Your Score: {score} | High Score: {highScore}
      </Navbar.Text>
    </Navbar>
  );
};

export default NavBar;