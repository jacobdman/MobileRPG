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
    _.times(27, () => seed.push(_.random(1, 99)));
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
  //Set city values
  if (city) {
    city = {};
    var num = _.round(seed[2] % 10);
    if (num === 0 || num === 1 || num === 2) {
      city.doorLocation = 'N';
    } else if (num === 3 || num === 4) {
      city.doorLocation = 'E';
    } else if (num === 5 || num === 6 || num === 7) {
      city.doorLocation = 'S';
    } else {
      city.doorLocation = 'W';
    }
    city.x = _.round(((map.cols - 25) * seed[5]) / 100);
    city.y = _.round(((map.rows - 25) * seed[6]) / 100);
    city.width = _.round(((map.cols - city.x) * seed[7]) / 100);
    city.height = _.round(((map.rows - city.y) * seed[8]) / 100);
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
    if (city.doorLocation === 'N') {
      map.mapArr[city.width / 2 + city.x] = 0;
      map.mapArr[city.width / 2 + city.x - 1] = 39;
      map.mapArr[city.width / 2 + city.x + 1] = 38;
    }
  }
  console.log(
    seed,
    map.cols,
    map.rows,
    city,
    map.mapArr[city.x + city.width / 2]
  );

  return map;
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
// 	7 - building height one
// 	8 - building width one
// 	9 - building height two
// 	10 - building width two
// 	11 - building height three
// 	12 - building width three
// 	13 - building location
// 	14 - building location
// 	15 - building location
// 	16 - building location
// 	17 - building location
// 	18 - building location
// 	19 - building location
// 	20 - building location
// 	21 - building order
// 	22 - fauna
// 	23 - fauna
// 	24 - fauna
// 	25 - dungeon count
// 	26 - dungeon location
// 	27 - dungeon location
// 	28 - secret chest location
// }
