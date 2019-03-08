import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { StyleSheet, View, TouchableOpacity, Animated } from 'react-native';
import { PerfectDos } from '../StyledText';
import OptionStore from '../../stores/OptionStore';

class OptionScreen extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1500,
    }).start();
  }

  handleTouch = (cb, next) => {
    cb();
    next();
    OptionStore.currentOptions = null;
  };

  render() {
    const { fadeAnim } = this.state;
    return (
      <Animated.View style={[styles.root, { opacity: fadeAnim }]}>
        {OptionStore.customOptions.length > 0 &&
          OptionStore.customOptions.map((option, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={styles.button}
                onPress={() => this.handleTouch(option.callback, option.next)}
              >
                <PerfectDos style={styles.text}>{option.title}</PerfectDos>
              </TouchableOpacity>
            );
          })}
      </Animated.View>
    );
  }
}

export default observer(OptionScreen);

const styles = StyleSheet.create({
  root: {
    justifyContent: 'space-evenly',
    flex: 1,
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
