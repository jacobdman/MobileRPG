import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import CharacterStore from '../../stores/CharacterStore'
import CharacterCreationPageOne from './CharacterCreationPageOne'
import CharacterCreationPageTwo from './CharacterCreationPageTwo'
import CharacterCreationPageThree from './CharacterCreationPageThree'

class CharacterCreation extends Component {
  state = {
    page: 1,
    chosenClassIndex: '',
    chosenRaceIndex: '',
    skinId: '',
    stats: [
      {name: 'Strength', shortName: 'STR', value: 1,},
      {name: 'Dexterity', shortName: 'DEX', value: 1,},
      {name: 'Constitution', shortName: 'CON', value: 1,},
      {name: 'Intelligence', shortName: 'INT', value: 1,},
      {name: 'Wisdom', shortName: 'WIS', value: 1,},
      {name: 'Charisma', shortName: 'CHA', value: 1,},
    ],
  }

  completePageOne = (classId, raceId) => {
    this.setState({ chosenClassIndex: classId, chosenRaceIndex: raceId, page: 2 })
  }

  completePageTwo = (id) => {
    this.setState({ skinId: id, page: 3 })
  }

  completePageThree = (stats) => {
    this.setState({ stats })
    this.props.navigation.navigate('Main')
  }

  previousPage = () => {
    this.setState({ page: this.state.page - 1 })
  };

  saveCharacter = () => {
    CharacterStore.saveCharacter(this.state)
  };

  render() {
    const { characterClasses, characterRaces } = CharacterStore;
    const { page, chosenClassIndex } = this.state
    return (
      <View style={styles.container}>
        {page === 1 ?
          <CharacterCreationPageOne
            characterClasses={characterClasses}
            characterRaces={characterRaces}
            completePageOne={this.completePageOne}
          />
          : page === 2 ?
          <CharacterCreationPageTwo
            characterClasses={characterClasses}
            characterRaces={characterRaces}
            previousPage={this.previousPage}
            completePageTwo={this.completePageTwo}
          />
          :
          <CharacterCreationPageThree
            chosenClass={characterClasses[chosenClassIndex]}
            previousPage={this.previousPage}
            completePageThree={this.completePageThree}
          />
        }
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
