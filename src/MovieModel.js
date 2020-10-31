const axios = require("axios").default;

export const getCharacters = async (characterLinks) => {
  const characters = [];
  for (let i = 0; i < characterLinks.length; i++) {
    let characterInfo = localStorage.getItem(characterLinks[i]);
    if (!characterInfo) {
      characterInfo = (await axios.get(characterLinks[i])).data;
      localStorage.setItem(characterLinks[i], JSON.stringify(characterInfo));
    } else {
      characterInfo = JSON.parse(characterInfo);
    }
    characters.push(characterInfo);
  }
  return characters;
};

export const getMovies = async () => {
  let movies = localStorage.getItem("movies");
  if (!movies) {
    movies = (await axios.get("https://swapi.dev/api/films/")).data.results;
    localStorage.setItem("movies", JSON.stringify(movies));
    return movies;
  } else {
    return JSON.parse(movies);
  }
};
