import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';

class CharacterCreation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.borderContainer}>
          <Text>This is the Character Creation screen</Text>
          <Button
            onPress={() => this.props.navigation.navigate('Main')}
            title="Save Character"
          />
        </View>
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
  },
  borderContainer: {
    flex: 1,
    width: '100%',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
