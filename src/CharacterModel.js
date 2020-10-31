// Repository calls for Character Page

export const getCharacterMovies = (films) => {
  const allMovies = JSON.parse(localStorage.getItem("movies"));
  const characterMovies = [];
  films.forEach((film) => {
    const index = Number.parseInt(film.charAt(film.length - 2)) - 1;
    characterMovies.push(allMovies[index]);
  });
  return characterMovies;
};
