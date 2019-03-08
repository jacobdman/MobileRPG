import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { PerfectDos } from '../StyledText';
import OptionStore from '../../stores/OptionStore';

class OptionScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => OptionStore.changeMenu('partyOptions')}
        >
          <PerfectDos style={styles.text}>Party</PerfectDos>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => OptionStore.changeMenu('movementOptions')}
        >
          <PerfectDos style={styles.text}>Move</PerfectDos>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => OptionStore.changeMenu('itemOptions')}
        >
          <PerfectDos style={styles.text}>Use</PerfectDos>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => OptionStore.changeMenu('actionOptions')}
        >
          <PerfectDos style={styles.text}>Action</PerfectDos>
        </TouchableOpacity>
      </View>
    );
  }
}

export default observer(OptionScreen);

const styles = StyleSheet.create({
  root: {
    justifyContent: 'space-evenly',
    flex: 1,
    paddingBottom: 10,
  },
  button: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 25,
  },
});
