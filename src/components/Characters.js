import React from "react";
import CharacterItem from "./CharacterItem";
import Score from "./Score";
import Footer from "./Footer";
import characters from "../data/characters.json";
import NavBar from "./Navbar";
import "../styles/characters.css";

class Characters extends React.Component {
  state = {
    characters: characters,
    randomCharacters: [],
    selected: [],
    score: 0,
    highScore: 0,
    match: false,
    message: "Click an image to begin!"
  };

  // Randomly displayed characters
  componentDidMount() {
    const randomCharacters = characters.sort(() => {
      return Math.random() - 0.5;
    });
    this.setState({ randomCharacters });
  }

  handleClickEvent = id => {
    console.log("handle click event", id);
    // Spread operator to track IDs selected
    this.setState({ selected: [...this.state.selected, id] });
    // Invoke function to check ID argument against selected array
    this.handleCheckSelection(id);
    // Invoke function to change the random order of characters
    this.handleResortCharacters();
    // If score equal (array.length-1) - game over
  };

  // Randomly displayed characters
  handleResortCharacters = () => {
    const randomCharacters = this.state.randomCharacters.sort(() => {
      return Math.random() - 0.5;
    });
    this.setState({ randomCharacters });
  };

  handleCheckSelection = id => {
    console.log(
      "check the id against the selection array",
      id,
      this.state.selected
    );
    if (this.state.selected.includes(id)) {
      console.log("match - end game");
      // Send message
      this.setState({ message: "Incorrect Guess!" });
      this.setState({ match: true });
    } else {
      // No match - continue game
      console.log("continue");
      // Increment score
      this.setState({ score: this.state.score + 1 });
      console.log("Characters selected", this.state.selected);
      console.log("Score", this.state.score);
      // Increment high score
      if (this.state.score >= this.state.highScore) {
        this.setState({ highScore: this.state.highScore + 1 });
        console.log("High Score", this.state.highScore);
      }
      // Send message
      this.setState({ message: "You Guessed Correctly!" });
    }
  };

  resetState = () => {
    console.log("invoke reset function");
    // Reset user score to 0
    this.setState({ score: 0 });
    // Reset match to false
    this.setState({ match: false });
    // Reset selected array
    this.setState({ selected: [] });
    // Reset message
    this.setState({ message: "Click an image to begin!" });
  };

  render() {
    let renderScore = this.state.match;
    let score;

    if (renderScore) {
      score = <Score score={this.state.score} resetState={this.resetState} />;
    }
    return (
      <div>
        {score}
        {console.log(this.state.characters)}
        <div className="container">
          <div className="img-container">
            {this.state.randomCharacters.map(character => (
              <CharacterItem
                key={character.id}
                character={character}
                handleClickEvent={this.handleClickEvent}
              />
            ))}
          </div>
        </div>
        <NavBar
          score={this.state.score}
          highScore={this.state.highScore}
          message={this.state.message}
          match={this.state.match}
        />
        <Footer />
      </div>
    );
  }
}

export default Characters;