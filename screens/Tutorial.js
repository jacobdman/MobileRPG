import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { observer } from 'mobx-react';
import OptionScreen from '../components/Options/OptionScreen';
import Dialog from '../components/Dialog';
import Map from '../components/Map';
import OptionStore from '../stores/OptionStore';
import MessagesStore from '../stores/MessagesStore';
import GameStore from '../stores/GameStore';
import MapStore from '../stores/MapStore';
import tutorial from '../models/tutorial';

class Tutorial extends Component {
  state = {
    showMap: false,
  };

  componentDidMount = () => {
    OptionStore.currentOptions = null;
    // MapStore.changeCurrentMap(tutorial.map);
    setTimeout(() => MessagesStore.AddMessage('...'), 1500);
    setTimeout(
      () => MessagesStore.AddMessage('You are surrounded by darkness'),
      5000
    );
    setTimeout(
      () =>
        OptionStore.changeMenu('customOptions', [
          {
            title: 'Call Out',
            callback: () => GameStore.makeDecision('tutorialCalledOut'),
            next: () => this.continueDialog(),
          },
          {
            title: 'Stay Quiet',
            callback: () => GameStore.makeDecision('tutorialStayedQuiet'),
            next: () => this.continueDialog(),
          },
        ]),
      10000
    );
  };

  continueDialog = () => {
    if (GameStore.decisions.tutorialCalledOut) {
      setTimeout(() => MessagesStore.AddMessage('Hello?', '#005EE5'), 500);
    } else {
      setTimeout(
        () =>
          MessagesStore.AddMessage(
            'You stay quiet and try to catch your bearings'
          ),
        500
      );
    }
    setTimeout(() => GameStore.changeColor('light'), 7000);
    setTimeout(() => GameStore.changeColor('dark'), 7100);
    setTimeout(() => GameStore.changeColor('light'), 7200);
    setTimeout(() => GameStore.changeColor('dark'), 7300);
    setTimeout(() => GameStore.changeColor('light'), 7400);
    setTimeout(() => GameStore.changeColor('dark'), 7500);
    setTimeout(
      () =>
        MessagesStore.AddMessage(
          'A very dim light flickers just in front of you, long enough for you to see where you are'
        ),
      8000
    );
    setTimeout(() => OptionStore.changeMenu('mainOptions'), 18000);
    setTimeout(() => this.setState({ showMap: true }), 18000);
  };

  render() {
    const { showMap } = this.state;
    return (
      <View style={styles.root}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.scrollContainer}
        >
          {showMap && <Map />}
          <OptionScreen />
        </ScrollView>
        <Dialog />
      </View>
    );
  }
}

export default observer(Tutorial);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 10,
  },
});
