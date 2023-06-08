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
            const modifiedString = "[" + jsonString.replace(/}{/g, "},{") + "]";
            const jsonArray = JSON.parse(modifiedString);
            
            const dictionaryArray = jsonArray.map(element, index => JSON.parse(element));
            dictionaryArray.array.forEach(element => {
                if(element.title == data.title){
                    dictionaryArray.splice(index, 1); // 2nd parameter means remove one item only
                    dictionaryArray.push(data)
                }
            });
        });

        fs.writeFile('movie.txt',dictionaryArray, 'utf8', (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log('File has been written.');
          });
    }
    

    static delete_movie_to_file(title){
        fs.readFile('movie.txt', 'utf8', (err, data) => {
            if (err) {
            console.error(err);
            return;
            }
            const modifiedString = "[" + jsonString.replace(/}{/g, "},{") + "]";
            const jsonArray = JSON.parse(modifiedString);
            
            const dictionaryArray = jsonArray.map(element, index => JSON.parse(element));
            dictionaryArray.array.forEach(element => {
                if(element.title == title){
                    dictionaryArray.splice(index, 1); // 2nd parameter means remove one item only
                }
            });
        });

        fs.writeFile('movie.txt',dictionaryArray, 'utf8', (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log('File has been written.');
          });
    }
    

    static search_movie_to_file(title){
        fs.readFile('movie.txt', 'utf8', (err, data) => {
            if (err) {
            console.error(err);
            return;
            }
            const modifiedString = "[" + jsonString.replace(/}{/g, "},{") + "]";
            const jsonArray = JSON.parse(modifiedString);
            
            const dictionaryArray = jsonArray.map(element, index => JSON.parse(element));
            dictionaryArray.array.forEach(element => {
                if(element.title == title){
                    return element;
                }
            });
        });
    }
}

module.exports = file_handling