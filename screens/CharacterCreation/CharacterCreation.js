import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import CharactCreationPageOne from './CharacterCreationPageOne'

class CharacterCreation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CharactCreationPageOne />
      </View>
    );
  }
}

export default CharacterCreation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 40,
    paddingBottom: 30,
    backgroundColor: '#353535',
    justifyContent: 'space-between',
  },
});
