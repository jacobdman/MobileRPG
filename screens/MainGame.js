import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { observer } from 'mobx-react';
import OptionScreen from '../components/Options/OptionScreen';
import Dialog from '../components/Dialog';
import Map from '../components/Map';

class MainGame extends Component {
  render() {
    return (
      <View style={styles.root}>
        <ScrollView
          horizontal
          // pagingEnabled
          snapToAlignment="start"
          snapToInterval={3000}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          style={styles.scrollContainer}
        >
          <Map />
          <OptionScreen />
        </ScrollView>
        <Dialog />
      </View>
    );
  }
}

export default observer(MainGame);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 10,
    width: '100%',
  },
});
