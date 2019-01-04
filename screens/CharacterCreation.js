import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';

class CharacterCreation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Character Creation screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Main')}
          title="Save Character"
        />
      </View>
    );
  }
}

export default CharacterCreation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
