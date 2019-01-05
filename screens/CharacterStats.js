import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

class CharacterStats extends Component {
  constructor () {
    super()
    this.state = {

    };
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.borderContainer}>
        </View>
      </View>
    );
  }
}

export default CharacterStats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 40,
    paddingBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#353535',
  },
  borderContainer: {
    flex: 1,
    width: '100%',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    marginBottom: 10,
    fontSize: 15,
  },
});
