import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { PerfectDos } from '../components/StyledText';

export default class AdventureStart extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={[styles.container, { flex: 1 }]}>
        <View style={[styles.container, { flex: 3 }]}>
          <PerfectDos style={styles.welcome}>Welcome Adventurer</PerfectDos>
          <Button
            onPress={() => this.props.navigation.navigate('CharacterCreation')}
            title={'Start Adventure'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
