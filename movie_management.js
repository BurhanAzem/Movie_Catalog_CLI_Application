const { displayCatalog } = require('./file_handling');
const { addMovie } = require('./file_handling');
const { updateMovie } = require('./file_handling');
const { deleteMovie } = require('./file_handling');
const { searchMovie } = require('./file_handling');
const { fetchMovie } = require('./API_requests');

class MovieManagement {
  static displayCatalog() {
    displayCatalog();
  }

  static addMovie() {
    addMovie();
  }

  static updateMovie() {
    updateMovie();
  }

  static deleteMovie() {
    deleteMovie();
  }

  static searchMovie() {
    searchMovie();
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
