import React from 'react';
import _ from 'lodash';

function MapGenerator(seed) {
  //Define Variables
  let map = {
    cols: 0,
    rows: 0,
    mapArr: [],
  };
  let city = false;
  //Check to see if a seed was passed in, and if not, make one!
  if (!seed) {
    seed = [];
    _.times(2, () => seed.push(_.random(1, 1000)));
    _.times(20, () => seed.push(_.random(1, 99)));
  }
  //Assign the maps columns and rows based on the seed
  map.cols = seed[0];
  map.rows = seed[1];
  //Create the mapArr with a border of tile 52's
  _.times(map.cols * map.rows, i => {
    if (
      _.inRange(i, map.cols) ||
      _.inRange(i, map.cols * map.rows - map.cols, map.cols * map.rows) ||
      i % map.cols === 0 ||
      i % map.cols === map.cols - 1
    ) {
      map.mapArr.push(52);
    } else {
      map.mapArr.push(0);
    }
  });
  //Determine if there should be a city in the map based on the size of the map
  if (seed[0] > 50 && seed[1] > 50) {
    if (seed[0] > 900 || seed[1] > 900) {
      city = true;
    } else if (seed[0] > 800 || seed[1] > 800) {
      city = _.inRange(seed[2], 86);
    } else if (seed[0] > 600 || seed[1] > 600) {
      city = _.inRange(seed[2], 71);
    } else if (seed[0] > 400 || seed[1] > 400) {
      city = _.inRange(seed[2], 51);
    } else if (seed[0] > 200 || seed[1] > 200) {
      city = _.inRange(seed[2], 31);
    } else {
      city = _.inRange(seed[2], 21);
    }
  }
  //Build a city!
  if (city) {
    city = {};
    var num = _.round(seed[2] % 10);
    if (num === 0 || num === 1 || num === 2) {
      city.entranceLocation = 'N';
    } else if (num === 3 || num === 4) {
      city.entranceLocation = 'S';
    } else if (num === 5 || num === 6 || num === 7) {
      city.entranceLocation = 'E';
    } else {
      city.entranceLocation = 'W';
    }
    city.x = _.round(((map.cols - 25) * seed[3]) / 100);
    city.y = _.round(((map.rows - 25) * seed[4]) / 100);
    city.width = _.round(((map.cols - city.x) * seed[5]) / 100);
    city.height = _.round(((map.rows - city.y) * seed[6]) / 100);
    city.area = city.width * city.height;
    //Fill horizontal walls
    map.mapArr.fill(
      41,
      city.x + map.cols * city.y + 1,
      city.x + city.width + map.cols * city.y
    );
    map.mapArr.fill(
      41,
      city.x + map.cols * city.y + map.cols * city.height + 1,
      city.x + city.width + map.cols * city.y + map.cols * city.height
    );
    //Fill vertical walls
    for (
      var i = city.x + map.cols * city.y + 1;
      i < city.x + city.width + map.cols * city.y + map.cols * city.height;
      i++
    ) {
      if (i % map.cols === city.x || i % map.cols === city.x + city.width) {
        map.mapArr[i] = 44;
      }
    }
    //Place city corners
    map.mapArr[city.x + map.cols * city.y] = 40;
    map.mapArr[city.x + city.width + map.cols * city.y] = 42;
    map.mapArr[city.x + map.cols * city.y + map.cols * city.height] = 48;
    map.mapArr[
      city.x + city.width + map.cols * city.y + map.cols * city.height
    ] = 50;
    let center = _.round(city.width / 2 + city.x + map.cols * city.y);
    let verticalCenter = _.round(
      (city.height / 2 + city.y) * map.cols + city.x
    );
    //Place City Entrances
    if (city.entranceLocation === 'N') {
      map.mapArr[center] = 0;
      if (city.width > 300) {
        map.mapArr[center - 1] = 0;
        map.mapArr[center + 1] = 0;
        map.mapArr[center - 2] = 0;
        map.mapArr[center + 2] = 0;
        map.mapArr[center - 3] = 0;
        map.mapArr[center + 3] = 0;
        map.mapArr[center - 4] = 39;
        map.mapArr[center + 4] = 38;
      } else if (city.width > 150) {
        map.mapArr[center - 1] = 0;
        map.mapArr[center + 1] = 0;
        map.mapArr[center - 2] = 0;
        map.mapArr[center + 2] = 0;
        map.mapArr[center - 3] = 39;
        map.mapArr[center + 3] = 38;
      } else if (city.width > 50) {
        map.mapArr[center - 1] = 0;
        map.mapArr[center + 1] = 0;
        map.mapArr[center - 2] = 39;
        map.mapArr[center + 2] = 38;
      } else {
        map.mapArr[center - 1] = 39;
        map.mapArr[center + 1] = 38;
      }
    } else if (city.entranceLocation === 'S') {
      map.mapArr[center + city.height * map.cols] = 0;
      if (city.width > 300) {
        map.mapArr[center - 1 + city.height * map.cols] = 0;
        map.mapArr[center + 1 + city.height * map.cols] = 0;
        map.mapArr[center - 2 + city.height * map.cols] = 0;
        map.mapArr[center + 2 + city.height * map.cols] = 0;
        map.mapArr[center - 3 + city.height * map.cols] = 0;
        map.mapArr[center + 3 + city.height * map.cols] = 0;
        map.mapArr[center - 4 + city.height * map.cols] = 39;
        map.mapArr[center + 4 + city.height * map.cols] = 38;
      } else if (city.width > 150) {
        map.mapArr[center - 1 + city.height * map.cols] = 0;
        map.mapArr[center + 1 + city.height * map.cols] = 0;
        map.mapArr[center - 2 + city.height * map.cols] = 0;
        map.mapArr[center + 2 + city.height * map.cols] = 0;
        map.mapArr[center - 3 + city.height * map.cols] = 39;
        map.mapArr[center + 3 + city.height * map.cols] = 38;
      } else if (city.width > 50) {
        map.mapArr[center - 1 + city.height * map.cols] = 0;
        map.mapArr[center + 1 + city.height * map.cols] = 0;
        map.mapArr[center - 2 + city.height * map.cols] = 39;
        map.mapArr[center + 2 + city.height * map.cols] = 38;
      } else {
        map.mapArr[center - 1 + city.height * map.cols] = 39;
        map.mapArr[center + 1 + city.height * map.cols] = 38;
      }
    } else if (city.entranceLocation === 'W') {
      map.mapArr[verticalCenter] = 0;
      if (city.height > 300) {
        map.mapArr[verticalCenter - map.cols] = 0;
        map.mapArr[verticalCenter + map.cols] = 0;
        map.mapArr[verticalCenter - map.cols] = 0;
        map.mapArr[verticalCenter + map.cols] = 0;
        map.mapArr[verticalCenter - map.cols] = 0;
        map.mapArr[verticalCenter + map.cols] = 0;
        map.mapArr[verticalCenter - map.cols] = 47;
        map.mapArr[verticalCenter + map.cols] = 43;
      } else if (city.height > 150) {
        map.mapArr[verticalCenter - map.cols] = 0;
        map.mapArr[verticalCenter + map.cols] = 0;
        map.mapArr[verticalCenter - map.cols] = 0;
        map.mapArr[verticalCenter + map.cols] = 0;
        map.mapArr[verticalCenter - map.cols] = 47;
        map.mapArr[verticalCenter + map.cols] = 43;
      } else if (city.height > 50) {
        map.mapArr[verticalCenter - map.cols] = 0;
        map.mapArr[verticalCenter + map.cols] = 0;
        map.mapArr[verticalCenter - map.cols] = 47;
        map.mapArr[verticalCenter + map.cols] = 43;
      } else {
        map.mapArr[verticalCenter - map.cols] = 47;
        map.mapArr[verticalCenter + map.cols] = 43;
      }
    } else if (city.entranceLocation === 'E') {
      map.mapArr[verticalCenter] = 0;
      if (city.height > 300) {
        map.mapArr[verticalCenter - map.cols + city.width] = 0;
        map.mapArr[verticalCenter + map.cols + city.width] = 0;
        map.mapArr[verticalCenter - map.cols + city.width] = 0;
        map.mapArr[verticalCenter + map.cols + city.width] = 0;
        map.mapArr[verticalCenter - map.cols + city.width] = 0;
        map.mapArr[verticalCenter + map.cols + city.width] = 0;
        map.mapArr[verticalCenter - map.cols + city.width] = 47;
        map.mapArr[verticalCenter + map.cols + city.width] = 43;
      } else if (city.height > 150) {
        map.mapArr[verticalCenter - map.cols + city.width] = 0;
        map.mapArr[verticalCenter + map.cols + city.width] = 0;
        map.mapArr[verticalCenter - map.cols + city.width] = 0;
        map.mapArr[verticalCenter + map.cols + city.width] = 0;
        map.mapArr[verticalCenter - map.cols + city.width] = 47;
        map.mapArr[verticalCenter + map.cols + city.width] = 43;
      } else if (city.height > 50) {
        map.mapArr[verticalCenter - map.cols + city.width] = 0;
        map.mapArr[verticalCenter + map.cols + city.width] = 0;
        map.mapArr[verticalCenter - map.cols + city.width] = 47;
        map.mapArr[verticalCenter + map.cols + city.width] = 43;
      } else {
        map.mapArr[verticalCenter - map.cols + city.width] = 47;
        map.mapArr[verticalCenter + map.cols + city.width] = 43;
      }
    }
    //Buildings
    city.spacing = _.round(seed[7] / 10) ? _.round(seed[7] / 10) : 1;
    let remainingArea = city.area - city.width * 2 - city.height * 2;
    // asdf
    console.log(seed, map.cols, map.rows, city, remainingArea);

    return map;
  }
}

export default MapGenerator;

// seed{
// 	0 - map width
// 	1 - map height
// 	2 - city?
// 	3 - city x
// 	4 - city y
// 	5 - city height
// 	6 - city width
//  7 - building spacing
//  8 - building percentage
// 	9 - building height one
// 	10 - building width one
// 	11 - building height two
// 	12 - building width two
// 	13 - building height three
// 	14 - building width three
// 	15 - building order
// 	16 - fauna
// 	17 - fauna
// 	18 - fauna
// 	19 - dungeon count
// 	20 - dungeon location
// 	21 - dungeon location
// 	22 - secret chest location
// }
