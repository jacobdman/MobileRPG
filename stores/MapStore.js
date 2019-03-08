import React from 'react';
import { View } from 'react-native';
import { observable, decorate, action } from 'mobx';
import tileStyles from '../models/tileStyles';
import buildingInteriorTiles from '../models/buildingInteriorTiles';
import MapGenerator from '../utils/MapGenerator';

const randomMap = () => {
  let count = 0;
  let arr = [];
  while (count < 10000) {
    arr.push(Math.round(Math.random() * (100 - 0) + 1));
    count++;
  }
  return arr;
};

class MapStore {
  tsize = 25;
  currentMap = MapGenerator();
  // currentMap = {
  //   cols: 100,
  //   rows: 100,
  //   mapArr: randomMap(),
  // };
  //****************Actions*****************************
  getTile = tileId => {
    const tile = tileStyles[tileId];
    if (tile) {
      return (
        <View
          style={{
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {tile.map((style, i) => {
            return (
              <View
                style={[
                  style,
                  style.borderRadius
                    ? {
                        borderRadius: this.tsize * style.borderRadius,
                      }
                    : { borderRadius: 0 },
                ]}
                key={i}
              />
            );
          })}
        </View>
      );
    } else {
      return <View />;
    }
  };
  changeCurrentMap = mapObj => {
    this.currentMap = mapObj;
  };
}

export default decorate(new MapStore(), {
  tsize: observable,
  currentMap: observable,
  changeCurrentMap: action,
});
