import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./App.css";
import Characters from "./components/Characters";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Characters />
      </div>
    );
  }
}

export default App;