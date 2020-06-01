import open from 'open';

import readline from 'readline-sync';

const fs = require('fs');

const rawdata = fs.readFileSync('./db-with-locations.json');
const data = JSON.parse(rawdata);

let res = '';
const fixes = [];

data.map(place => {
  if (res !== 'q') {
    const {
      location: {
        coordinates: [longitude, latitude],
      },
    } = place;
    console.log(place.name, latitude, longitude);

    open(
      encodeURI(
        `https://google.com/maps/search/${latitude},+${longitude}/@${latitude},${longitude},10z`,
      ),
    );

    res = readline.question('Next? (q=quit)');

    if (res && res !== 'q') {
      fs.appendFileSync('./fixes.txt', `\nid: ${place._id.$oid}, name: ${place.name}, ${res}`);
      fixes.push();
    }
  }
});
