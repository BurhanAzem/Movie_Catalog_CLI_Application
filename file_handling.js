const fs = require('fs');

class file_handling{
    displayCatalog(){
        fs.readFile('file.txt', 'utf8', (err, data) => {
            if (err) {
            console.error(err);
            return;
            }
            return data;
        });
    }

    addMovie(){
        fs.writeFile('file.txt', data, 'utf8', (err) => {
            if (err) {
            console.error(err);
            return;
            }
            console.log('File has been written.');
        });
    }
    

    updateMovie(){
        fs.unlink('file.txt', (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log('File has been deleted.');
          });
    }
    

    deleteMovie(){
        fs.unlink('file.txt', (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log('File has been deleted.');
          });
    }
    

    searchMovie(){
        fs.readFile('file.txt', 'utf8', (err, data) => {
            if (err) {
            console.error(err);
            return;
            }
            return data;
        });
    }
}

module.exports = file_handling