import React from "react";
import styled from "styled-components";
import { Text, MovieWrapper } from "./Common";

const Subtitle = styled.p`
  color: white;
  font-family: "Pathway Gothic One", sans-serif;
`;

const Title = styled.h1`
  color: #ffe81f;
  margin: auto;
  font-family: "Pathway Gothic One", sans-serif;
`;

class MovieBox extends React.Component {
  handleClick = () => {
    const { title, characters } = this.props;
    this.props.handleClick({ title, characters });
  };

  render() {
    return (
      <MovieWrapper onClick={this.handleClick}>
        <Title> {this.props.title} </Title>
        <Subtitle> Director: {this.props.director} </Subtitle>
        <Subtitle> Released On: {this.props.release_date} </Subtitle>
        <Text> {this.props.opening_crawl} </Text>
      </MovieWrapper>
    );
  }
}

export default MovieBox;
