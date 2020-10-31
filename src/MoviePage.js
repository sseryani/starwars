import React from "react";
import styled from "styled-components";
import CharacterBox from "./CharacterBox";
import { BackButton, Title } from "./Common";
import { getCharacters } from "./MovieModel";

const Header = styled.div`
  display: flex;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5px;
  padding-top: 30px;
`;

class MoviePage extends React.Component {
  async componentDidMount() {
    const { characterLinks } = this.props;
    this.setState({
      characters: await getCharacters(characterLinks),
      loading: false,
    });
  }

  state = {
    characters: [],
    loading: true,
  };

  handleClick = () => {
    this.props.handleClick();
  };

  handleGoToCharacter = (characterInfo) => {
    this.props.handleGoToCharacter(characterInfo);
  };

  renderCharacters = () => {
    const { characters } = this.state;
    return characters.map((character) => {
      return (
        <CharacterBox
          key={character.name}
          characterInfo={character}
          handleGoToCharacter={this.handleGoToCharacter}
        ></CharacterBox>
      );
    });
  };

  render() {
    const { title } = this.props;
    const { loading } = this.state;
    if (loading) {
      return (
        <div>
          <Title>Loading...</Title>
        </div>
      );
    }
    return (
      <div>
        <Header>
          <BackButton onClick={this.handleClick}>
            <Title>Go Back</Title>
          </BackButton>
          <Title>{title}</Title>
        </Header>
        <PageWrapper>{this.renderCharacters()}</PageWrapper>
      </div>
    );
  }
}

export default MoviePage;
