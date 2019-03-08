import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
  Text,
} from 'react-native';
import { observer } from 'mobx-react';
import Camera from './Camera';
import MapStore from '../stores/MapStore';
import GameStore from '../stores/GameStore';

const { tsize } = MapStore;
const width = Dimensions.get('window').width - 40;

class Map extends Component {
  constructor() {
    super();
    this.camera = new Camera(
      MapStore.currentMap,
      tsize,
      styles.container.height,
      styles.container.width
    );
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1500,
    }).start();
  }

  // movePlayer = (left, top) => {
  //   Animated.sequence([
  //     Animated.timing(this.heroTile.left, {
  //       toValue: left,
  //       // easing: Easing.back(),
  //       duration: 2000,
  //     }).start(),
  //     Animated.timing(this.heroTile.top, {
  //       toValue: top,
  //       // easing: Easing.back(),
  //       duration: 2000,
  //     }).start(),
  //   ]).start(); // start the sequence group
  // };

  handleTilePress = (col, row) => async event => {
    this.camera.update(this.heroTile, col, row);
    this.forceUpdate();
  };

  drawLayer = function() {
    let map = MapStore.currentMap;
    var startCol = Math.floor(this.camera.x / tsize);
    var endCol = startCol + this.camera.width / tsize;
    var startRow = Math.floor(this.camera.y / tsize);
    var endRow = startRow + this.camera.height / tsize;
    var offsetX = -this.camera.x + startCol * tsize;
    var offsetY = -this.camera.y + startRow * tsize;
    let arr = [];
    for (let c = startCol; c < endCol; c++) {
      for (let r = startRow; r < endRow; r++) {
        let x = (c - startCol) * tsize + offsetX;
        let y = (r - startRow) * tsize + offsetY;
        var tile = map.mapArr[r * map.cols + c];
        if (tile >= 0) {
          arr.push(
            <TouchableOpacity
              key={arr.length}
              onPress={this.handleTilePress(c, r)}
              style={[
                styles.tile,
                {
                  position: 'absolute',
                  left: Math.round(x),
                  top: Math.round(y),
                  width: tsize,
                  height: tsize,
                },
              ]}
            >
              {MapStore.getTile(tile)}
              <Text style={{ position: 'absolute', fontSize: 10 }}>{r * c}</Text>
            </TouchableOpacity>
          );
        }
      }
    }
    return arr;
  };

  render() {
    const { fadeAnim } = this.state;
    return (
      <Animated.View style={[styles.root, { opacity: fadeAnim }]}>
        <View style={styles.container}>
          {this.drawLayer()}
          <View
            style={styles.tile}
            ref={component => (this.heroTile = component)}
          >
            <View style={styles.circleFilled} />
          </View>
        </View>
      </Animated.View>
    );
  }
}

export default observer(Map);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginRight: tsize,
  },
  container: {
    height:
      tsize * MapStore.currentMap.rows > Dimensions.get('screen').height / 2
        ? Dimensions.get('screen').height / 2
        : tsize * MapStore.currentMap.rows,
    width:
      tsize * MapStore.currentMap.cols > width
        ? width
        : tsize * MapStore.currentMap.cols,
    borderColor: '#E5E5E5',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
  tile: {
    height: tsize,
    width: tsize,
    borderColor: GameStore.color.grid,
    borderStyle: 'solid',
    borderWidth: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleFilled: {
    height: '50%',
    width: '50%',
    backgroundColor: '#E5E5E5',
    borderRadius: 999,
  },
});
