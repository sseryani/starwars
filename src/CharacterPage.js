import React from "react";
import styled from "styled-components";
import {
  MovieWrapper,
  TextNoSpace,
  BackButton,
  PageWrapper,
  Title,
} from "./Common";
import { getCharacterMovies } from "./CharacterModel";

const Header = styled.div`
  display: flex;
`;

const Label = styled.label`
  color: #ffe81f;
`;

const MoviesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class CharacterPage extends React.Component {
  handleClick = () => {
    this.props.handleBack(this.props.fromMovie);
  };

  handleGoToMovie = (e) => {
    const clickedMovie = e.target.innerText;
    const characterMovies = getCharacterMovies(this.props.characterInfo.films);
    let movieInfo;
    for (let i = 0; i < characterMovies.length; i++) {
      if (clickedMovie === characterMovies[i].title) {
        movieInfo = characterMovies[i];
        break;
      }
    }
    this.props.handleGoToMovie(movieInfo);
  };

  renderMovies = (characterMovies) => {
    return characterMovies.map((movie) => {
      return (
        <MovieWrapper onClick={this.handleGoToMovie} key={movie.title}>
          {movie.title}
        </MovieWrapper>
      );
    });
  };

  render() {
    const {
      birth_year,
      eye_color,
      gender,
      hair_color,
      height,
      mass,
      name,
      skin_color,
    } = this.props.characterInfo;

    return (
      <div>
        <Header>
          <BackButton onClick={this.handleClick}>
            <Title>Go Back</Title>
          </BackButton>
          <Title>{name}</Title>
        </Header>
        <PageWrapper>
          <Label htmlFor="born">Born on: </Label>
          <TextNoSpace id="born">{birth_year}</TextNoSpace>

          <Label htmlFor="gender">Gender: </Label>
          <TextNoSpace id="gender">{gender}</TextNoSpace>

          <Label htmlFor="eye_color">Eye Color: </Label>
          <TextNoSpace id="eye_color">{eye_color}</TextNoSpace>

          <Label htmlFor="hair_color">Hair Color: </Label>
          <TextNoSpace id="hair_color">{hair_color}</TextNoSpace>

          <Label htmlFor="height">Height: </Label>
          <TextNoSpace id="height">{height}</TextNoSpace>

          <Label htmlFor="mass">Mass: </Label>
          <TextNoSpace id="mass">{mass}</TextNoSpace>

          <Label htmlFor="skin_color">Skin Color: </Label>
          <TextNoSpace id="skin_color">{skin_color}</TextNoSpace>

          <Label>{name} has been in movies:</Label>
          <MoviesWrapper>
            {this.renderMovies(
              getCharacterMovies(this.props.characterInfo.films)
            )}
          </MoviesWrapper>
        </PageWrapper>
      </div>
    );
  }
}

export default CharacterPage;
