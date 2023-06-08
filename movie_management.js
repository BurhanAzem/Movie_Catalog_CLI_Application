const  file_handling  = require('./file_handling');
const prompt = require('prompt-sync')();


class MovieManagement {
  static displayCatalog() {
    file_handling.display_catalog()
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  static addMovie() {
    let title = prompt('Enter the movie title: ');
    let director = prompt('Enter the director: ');
    let release = prompt('Enter the release date: ');
    let year = prompt('Enter the year: ');
    let genre = prompt('Enter the genre: ');
    const movieData = {
      title: title,
      director: director,
      release: release,
      year: year,
      genre: genre
    };

    const jsonString = JSON.stringify(movieData)
    file_handling.add_movie_to_file(jsonString);
  }

  static updateMovie() {
    let title = prompt('Enter the movie title: ');
    let director = prompt('Enter the director: ');
    let release = prompt('Enter the release date: ');
    let year = prompt('Enter the year: ');
    let genre = prompt('Enter the genre: ');
    const movieData = {
      title: title,
      director: director,
      release: release,
      year: year,
      genre: genre
    };

    const jsonString = JSON.stringify(movieData)
    file_handling.update_movie_to_file(jsonString)
  }

  static deleteMovie() {
    let title = prompt('Enter the movie title: ');
    file_handling.delete_movie_to_file(title)
  }

  static searchMovie() {
    let title = prompt('Enter the movie title: ');
    file_handling.search_movie_to_file(title);
  }

  static fetchMovieData() {
    fetchMovie()
      .then(data => {
        // Use the fetched data here
        console.log(data);
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error(error);
      });
  }
}

module.exports = MovieManagement;
