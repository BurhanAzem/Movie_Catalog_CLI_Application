
const fetch = require('node-fetch');

const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=19e7a19f';
const options = {
  method: 'GET',
  headers: {accept: 'application/json', Authorization: 'Bearer KEY'}
};

function fetchMovie() {
    return fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
}

module.exports = fetchMovie