import React from "react";
import MovieBox from "./MovieBox";
import styled from "styled-components";
import { getMovies } from "./MovieModel";
import { Title } from "./Common";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5px;
`;

class Movies extends React.Component {
  state = {
    movies: [],
  };

  // TODO: Move to model.js
  async componentDidMount() {
    this.setState({ movies: await getMovies() });
  }

  handleClick = (movie_info) => {
    this.props.handleClick(movie_info);
  };

  renderMovies = () => {
    const { movies } = this.state;
    return movies.map((movie) => {
      return (
        <MovieBox
          handleClick={this.handleClick}
          characters={movie.characters}
          producer={movie.producer}
          director={movie.director}
          title={movie.title}
          episode_id={movie.episode_id}
          release_date={movie.release_date}
          key={movie.episode_id}
          opening_crawl={movie.opening_crawl}
        ></MovieBox>
      );
    });
  };

  render() {
    const { movies } = this.state;

    return movies === undefined ? (
      <Title>Loading...</Title>
    ) : (
      <div>
        <Title>Star Wars Movies</Title>
        <PageWrapper>{this.renderMovies()}</PageWrapper>
      </div>
    );
  }
}

export default Movies;
