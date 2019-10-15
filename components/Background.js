import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GameStore from '../stores/GameStore';

class Background extends Component {
  changeBackgroundColor = color => {
    this.props.color = color;
  };
  render() {
    let { color } = GameStore;
    return (
      <LinearGradient colors={color.background} style={styles.root}>
        {this.props.children}
      </LinearGradient>
    );
    // return (
    //   <View style={[styles.root, { backgroundColor: color.background }]}>
    //     {this.props.children}
    //   </View>
    // );
  }
}

export default observer(Background);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 25,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
