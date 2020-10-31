import React from "react";
import { Text, MovieWrapper } from "./Common";

class CharacterBox extends React.Component {
  handleClick = () => {
    this.props.handleGoToCharacter(this.props.characterInfo);
  };

  render() {
    const { name } = this.props.characterInfo;
    return (
      <MovieWrapper onClick={this.handleClick}>
        <Text> {name} </Text>
      </MovieWrapper>
    );
  }
}

export default CharacterBox;
