import React from "react";
import Movies from "./Movies";
import MoviePage from "./MoviePage";
import CharacterPage from "./CharacterPage";

class Controller extends React.Component {
  state = {
    // 1 for all movies, 2 for characters per movie, 3 for character info page
    currentPage: 1,
    currentMovie: null,
    currentCharacter: null,
  };

  handleBack = () => {
    this.setState({ currentPage: 1, currentMovie: null });
  };

  handleClick = (movieInfo) => {
    this.setState({ currentPage: 2, currentMovie: movieInfo });
  };

  handleGoToCharacter = (characterInfo) => {
    this.setState({ currentPage: 3, currentCharacter: characterInfo });
  };

  handleBackFromCharacter = (movieInfo) => {
    this.setState({
      currentPage: 2,
      currentMovie: movieInfo,
      currentCharacter: null,
    });
  };

  render() {
    const { currentPage, currentMovie, currentCharacter } = this.state;
    if (currentPage === 1) {
      return <Movies handleClick={this.handleClick}></Movies>;
    } else if (currentPage === 2) {
      return (
        <MoviePage
          title={currentMovie.title}
          characterLinks={currentMovie.characters}
          handleClick={this.handleBack}
          handleGoToCharacter={this.handleGoToCharacter}
        ></MoviePage>
      );
    } else {
      return (
        <CharacterPage
          characterInfo={currentCharacter}
          handleBack={this.handleBackFromCharacter}
          handleGoToMovie={this.handleBackFromCharacter}
          fromMovie={currentMovie}
        ></CharacterPage>
      );
    }
  }
}

export default Controller;
