const readline = require('readline');
const movie_management = require('./movie_management');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu() {
  console.log("Movie Catalog CLI Application");
  console.log("--------------------------------");
  console.log("1- Display Movie Catalog");
  console.log("2- Add New Movie");
  console.log("3- Update Movie Details");
  console.log("4- Delete Movie");
  console.log("5- Search and Filter");
  console.log("6- Fetch Movie Data");
  console.log("7- Exit");
}


    menu();
    rl.on('line', (input) => {
    const choice = input.trim();
    switch (choice) {
        case '1':
            movie_management.displayCatalog();
        break;
        case '2':
            movie_management.addMovie();
        break;
        case '3':
            movie_management.updateMovie();
        break;
        case '4':
            movie_management.deleteMovie();
        break;
        case '5':
            movie_management.searchMovie();
        break;
        case '6':
            movie_management.fetchMovieData();
        break;
        case '7':
            process.exit();
        default:
        console.log("Your choice is not valid.");
    }
    });
