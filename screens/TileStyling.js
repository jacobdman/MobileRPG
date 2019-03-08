import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import MapStore from '../stores/MapStore';
import GameStore from '../stores/GameStore';

class TileStyling extends Component {
  render() {
    const row = id => {
      return (
        <TouchableOpacity style={styles.tile}>
          {MapStore.getTile(id)}
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.root}>
        <View style={styles.row}>
          {row(0)}
          {row(1)}
          {row(2)}
          {row(3)}
        </View>
        <View style={styles.row}>
          {row(4)}
          {row(5)}
          {row(6)}
          {row(7)}
        </View>
        <View style={styles.row}>
          {row(8)}
          {row(9)}
          {row(10)}
          {row(11)}
        </View>
        <View style={styles.row}>
          {row(12)}
          {row(13)}
          {row(14)}
          {row(15)}
        </View>
        <View style={styles.row}>
          {row(16)}
          {row(17)}
          {row(18)}
          {row(19)}
        </View>
        <View style={styles.row}>
          {row(20)}
          {row(21)}
          {row(22)}
          {row(23)}
        </View>
        <View style={styles.row}>
          {row(24)}
          {row(25)}
          {row(26)}
          {row(27)}
        </View>
        <View style={styles.row}>
          {row(28)}
          {row(29)}
          {row(30)}
          {row(31)}
        </View>
        <View style={styles.row}>
          {row(32)}
          {row(33)}
          {row(34)}
          {row(35)}
        </View>
        <View style={styles.row}>
          {row(36)}
          {row(37)}
          {row(38)}
          {row(39)}
        </View>
        <View style={styles.row}>
          {row(40)}
          {row(41)}
          {row(42)}
          {row(43)}
        </View>
        <View style={styles.row}>
          {row(44)}
          {row(45)}
          {row(46)}
          {row(47)}
        </View>
        <View style={styles.row}>
          {row(48)}
          {row(49)}
          {row(50)}
          {row(51)}
        </View>
        <View style={styles.row}>
          {row(52)}
          {row(53)}
          {row(54)}
          {row(55)}
        </View>
      </View>
    );
  }
}

export default TileStyling;

const styles = StyleSheet.create({
  root: {
    height: 750,
    width: 390,
    marginTop: 50,
    borderColor: '#E5E5E5',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  tile: {
    height: 50,
    width: 50,
    borderColor: GameStore.color.grid,
    borderStyle: 'solid',
    borderWidth: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
