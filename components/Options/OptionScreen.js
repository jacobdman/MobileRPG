import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { StyleSheet, View, Dimensions } from 'react-native';
import OptionStore from '../../stores/OptionStore';
import MainOptions from './MainOptions';
import MovementOptions from './MovementOptions';
import CustomOptions from './CustomOptions';

class OptionScreen extends Component {
  render() {
    let options;
    if (OptionStore.currentOptions === 'mainOptions') {
      options = <MainOptions />;
    } else if (OptionStore.currentOptions === 'movementOptions') {
      options = <MovementOptions />;
    } else if (OptionStore.currentOptions === 'customOptions') {
      options = <CustomOptions />;
    }
    return <View style={styles.root}>{options && options}</View>;
  }
}

export default observer(OptionScreen);

const width = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width,
  },
});
