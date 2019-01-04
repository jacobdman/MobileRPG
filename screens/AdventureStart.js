import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';

import { RSEHandwritingPi } from '../components/StyledText';

export default class AdventureStart extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={[styles.container, {flex: 1}]}>
        <View style={[styles.container, {flex: 3}]}>
          <RSEHandwritingPi style={styles.welcome}>Welcome Adventurer</RSEHandwritingPi>
          {console.log(this.props.navigation)}
          <Button
            onPress={() => this.props.navigation.navigate('CharacterCreation')}
            title={"Start Adventure"}
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
