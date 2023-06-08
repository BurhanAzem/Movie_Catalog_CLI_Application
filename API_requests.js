const fetch = require('node-fetch');

const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=19e7a19f';
const options = {
  method: 'GET',
  headers: { accept: 'application/json', Authorization: 'Bearer KEY' }
};

function fetchMovie() {
  fetch(url, options)
    .then(res => res.json())
    .then(json => {
      const jsonString = JSON.stringify(json);
      return jsonString;
    })
    .catch(err => console.error('error:' + err));
}

module.exports = { fetchMovie };
