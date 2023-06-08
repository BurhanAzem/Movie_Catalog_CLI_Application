const fs = require('fs');

class file_handling{
    static display_catalog(){
        return new Promise((resolve, reject) => {
        fs.readFile('./movie.txt', 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    })
    }

    static add_movie_to_file(data){
        fs.appendFile('movie.txt', data, 'utf8', (err) => {
            if (err) {
            console.error(err);
            return;
            }
            console.log('File has been written.');
        });
    }
    

    static update_movie_to_file(data){
        fs.readFile('movie.txt', 'utf8', (err, data) => {
            if (err) {
            console.error(err);
            return;
            }
            return data;
        });

        fs.writeFile('movie.txt', (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log('File has been deleted.');
          });
    }
    

    static delete_movie_to_file(title){
        fs.readFile('movie.txt', 'utf8', (err, data) => {
            if (err) {
            console.error(err);
            return;
            }
            return data;
        });

        fs.unlink('movie.txt', (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log('File has been deleted.');
          });
    }
    

    static search_movie_to_file(title){
        fs.readFile('movie.txt', 'utf8', (err, data) => {
            if (err) {
            console.error(err);
            return;
            }
            return data;
        });
    }
}

module.exports = file_handling