module.exports = (temp, movie) => {
  let output = temp.replace(/{%MOVIENAME%}/g, movie.movieName);
  output = output.replace(/{%COUNTRY%}/g, movie.country);
  output = output.replace(/{%ACTORS%}/g, movie.actors);
  output = output.replace(/{%DURATION%}/g, movie.duration);
  output = output.replace(/{%YEAR%}/g, movie.year);
  output = output.replace(/{%DESCRIPTION%}/g, movie.description);
  output = output.replace(/{%ID%}/g, movie.id);
  return output;
}