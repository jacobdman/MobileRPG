import React, {Component} from 'react';
import {StyleSheet, View, Button, TouchableHighlight} from 'react-native';
import { PerfectDos } from '../../components/StyledText';

class CharacterCreationPageThree extends Component {
  state = {
    stats: [
      {name: 'Strength', shortName: 'STR', value: 1,},
      {name: 'Dexterity', shortName: 'DEX', value: 1,},
      {name: 'Constitution', shortName: 'CON', value: 1,},
      {name: 'Intelligence', shortName: 'INT', value: 1,},
      {name: 'Wisdom', shortName: 'WIS', value: 1,},
      {name: 'Charisma', shortName: 'CHA', value: 1,},
    ],
    points: 10,
    error: false,
  }

  handleChangeSkin = (skinId) => {
    this.setState({ chosenSkin: skinId });
  };

  completePageThree = () => {
    if (this.state.points === 0) {
      this.props.completePageThree(this.state.stats);
      this.setState({ error: false })
    } else {
      this.setState({ error: true })
    }
  };

  previousPage = () => {
    this.props.previousPage();
  };

  lowerStat = (i) => {
    let stats = this.state.stats;
    let points = this.state.points;
    if (stats[i].value >= 2) {
      stats[i].value = stats[i].value - 1;
      points = points + 1
      this.setState({ stats, points })
    }
  };

  raiseStat = (i) => {
    let stats = this.state.stats;
    let points = this.state.points;
    if (points >= 1) {
      stats[i].value = stats[i].value + 1;
      points = points - 1
      this.setState({ stats, points })
    }
  };

  render() {
    const { chosenClass } = this.props;
    const { stats, points, error } = this.state;
    return (
      <View style={[styles.borderContainer]}>
        <PerfectDos style={[styles.buttonText, {flex: 0.5}]}>Assign Character Stats</PerfectDos>
        <View style={[styles.borderBox, {flex: 8}]}>
          <View style={{flex: 3, justifyContent: 'space-evenly', padding: 10}}>
            <PerfectDos style={styles.descriptionText}>Assign your characters stats. For {chosenClass.name}, it is recommend you prioritize {chosenClass.priorityStat}</PerfectDos>
          </View>
          {stats.map(((stat, i) => {
            return (
              <View style={{ flex: 1.5, flexDirection: 'row', justifyContent: 'space-between', width: '100%', margin: 5}}>
                <View style={styles.statBox}>
                  <PerfectDos style={styles.buttonText}>{stat.shortName}</PerfectDos>
                  <PerfectDos style={styles.buttonText}>{stat.value}</PerfectDos>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '30%'}}>
                  <TouchableHighlight
                    onPress={() => this.lowerStat(i)}
                    underlayColor="#707070"
                  >
                    <PerfectDos style={styles.directionButton}>{'-'}</PerfectDos>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={() => this.raiseStat(i)}
                    underlayColor="#707070"
                  >
                    <PerfectDos style={styles.directionButton}>{'+'}</PerfectDos>
                  </TouchableHighlight>
                </View>
              </View>
            )
          }))}
          <View style={{flex: 0.5, justifyContent: 'space-evenly', padding: 10}}>
            <PerfectDos style={styles.descriptionText}>Points left: { points }</PerfectDos>
          </View>
        </View>
        <View style={{margin: 5}}></View>
        <View style={{flex: 0.5, flexDirection: 'row'}}>
          <Button
            onPress={() => this.previousPage()}
            title="Back"
            color="white"
          />
          <Button
            onPress={() => this.completePageThree()}
            title="Next"
            color="white"
          />
        </View>
        <View style={error ? styles.error : {display: 'none'}}>
          <PerfectDos style={[styles.descriptionText, {color: 'red'}]}>Points left: { points }</PerfectDos>
        </View>
      </View>
    );
  }
}

export default CharacterCreationPageThree;

const styles = StyleSheet.create({
  borderContainer: {
    flex: 1,
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  borderBox: {
    width: '100%',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  directionButton: {
    fontSize: 50,
    color: 'white',
  },
  descriptionText: {
    color: 'white',
    fontSize: 20,
  },
  statBox: {
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  error: {
    flex: 0.5,
  }
});
