import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { PerfectDos } from '../StyledText';
import OptionStore from '../../stores/OptionStore';

class OptionScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => OptionStore.changeMenu('mainOptions')}
          >
            <PerfectDos style={styles.text}>{'< Back'}</PerfectDos>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => OptionStore.move('north')}
          >
            <PerfectDos style={styles.text}>North</PerfectDos>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { borderColor: '#353535' }]}
            onPress={() => OptionStore.move('north')}
          >
            <PerfectDos style={styles.text} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => OptionStore.move('east')}
          >
            <PerfectDos style={styles.text}>East</PerfectDos>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => OptionStore.changeMenu('moveTo')}
          >
            <PerfectDos style={styles.text}>To...</PerfectDos>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => OptionStore.move('west')}
          >
            <PerfectDos style={styles.text}>West</PerfectDos>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => OptionStore.move('south')}
        >
          <PerfectDos style={styles.text}>South</PerfectDos>
        </TouchableOpacity>
      </View>
    );
  }
}

export default observer(OptionScreen);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    height: 55,
    width: '30%',
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
