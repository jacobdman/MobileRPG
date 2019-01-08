import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  TouchableHighlight,
} from 'react-native';
import { PerfectDos } from '../../components/StyledText';

class CharacterCreationPageOne extends Component {
  state = {
    chosenName: '',
    chosenRaceIndex: '',
    raceObject: {},
    chosenClassIndex: '',
    classObject: {},
  };

  handleChangeClass = (characterClass, id) => {
    this.setState({ chosenClassIndex: id, classObject: characterClass });
  };

  handleChangeRace = (characterRace, id) => {
    this.setState({ chosenRaceIndex: id, raceObject: characterRace });
  };

  completePageOne = () => {
    this.props.completePageOne(
      this.state.chosenClassIndex,
      this.state.chosenRaceIndex
    );
  };

  componentDidMount = () => {
    let randomClassIndex = Math.floor(Math.random() * 9);
    let randomRaceIndex = Math.floor(Math.random() * 6);
    this.setState({
      chosenClassIndex: randomClassIndex,
      classObject: this.props.characterClasses[randomClassIndex],
      chosenRaceIndex: randomRaceIndex,
      raceObject: this.props.characterRaces[randomRaceIndex],
    });
  };

  render() {
    const { characterClasses, characterRaces } = this.props;
    const {
      chosenClassIndex,
      chosenRaceIndex,
      classObject,
      raceObject,
    } = this.state;
    return (
      <View style={styles.borderContainer}>
        <TextInput
          style={[styles.inputBox, { flex: 0.3 }]}
          placeholder="Character Name"
          placeholderTextColor="white"
          maxLength={25}
          autoCorrect={false}
          onChangeText={text => this.setState({ chosenName: text })}
        />
        <View style={{ margin: 5 }} />
        <View style={[styles.borderBox, { flex: 3 }]}>
          <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
            <PerfectDos style={styles.buttonText}>Choose a Class</PerfectDos>
          </View>
          <View style={[styles.optionBox, { flex: 3 }]}>
            <View style={{ justifyContent: 'space-evenly' }}>
              {characterClasses.slice(0, 5).map(characterClass => {
                return (
                  <TouchableHighlight
                    key={characterClasses.indexOf(characterClass)}
                    onPress={() =>
                      this.handleChangeClass(
                        characterClass,
                        characterClasses.indexOf(characterClass)
                      )
                    }
                    value={characterClasses.indexOf(characterClass)}
                    style={
                      chosenClassIndex ===
                      characterClasses.indexOf(characterClass)
                        ? [styles.button, { backgroundColor: '#707070' }]
                        : [styles.button, { backgroundColor: 'transparent' }]
                    }
                    underlayColor="#707070"
                  >
                    <PerfectDos style={styles.buttonText}>
                      {characterClass.name}
                    </PerfectDos>
                  </TouchableHighlight>
                );
              })}
            </View>
            <View style={{ justifyContent: 'space-evenly' }}>
              {characterClasses.slice(5, 10).map(characterClass => {
                return (
                  <TouchableHighlight
                    key={characterClasses.indexOf(characterClass)}
                    onPress={() =>
                      this.handleChangeClass(
                        characterClass,
                        characterClasses.indexOf(characterClass)
                      )
                    }
                    value={characterClasses.indexOf(characterClass)}
                    style={
                      chosenClassIndex ===
                      characterClasses.indexOf(characterClass)
                        ? [styles.button, { backgroundColor: '#707070' }]
                        : [styles.button, { backgroundColor: 'transparent' }]
                    }
                    underlayColor="#707070"
                  >
                    <PerfectDos style={styles.buttonText}>
                      {characterClass.name}
                    </PerfectDos>
                  </TouchableHighlight>
                );
              })}
            </View>
          </View>
          <View
            style={{ flex: 3, justifyContent: 'space-evenly', padding: 10 }}
          >
            <PerfectDos style={styles.descriptionText}>
              {classObject.description}
            </PerfectDos>
          </View>
        </View>
        <View style={{ margin: 5 }} />
        <View style={[styles.borderBox, { flex: 3 }]}>
          <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
            <PerfectDos style={styles.buttonText}>Choose a Race</PerfectDos>
          </View>
          <View style={[styles.optionBox, { flex: 3 }]}>
            <View style={{ justifyContent: 'space-evenly' }}>
              {characterRaces.slice(0, 4).map(characterRace => {
                return (
                  <TouchableHighlight
                    key={characterRaces.indexOf(characterRace)}
                    onPress={() =>
                      this.handleChangeRace(
                        characterRace,
                        characterRaces.indexOf(characterRace)
                      )
                    }
                    value={characterRaces.indexOf(characterRace)}
                    style={
                      chosenRaceIndex === characterRaces.indexOf(characterRace)
                        ? { backgroundColor: '#707070' }
                        : { backgroundColor: 'transparent' }
                    }
                    underlayColor="#707070"
                  >
                    <PerfectDos style={styles.buttonText}>
                      {characterRace.name}
                    </PerfectDos>
                  </TouchableHighlight>
                );
              })}
            </View>
            <View style={{ justifyContent: 'space-evenly' }}>
              {characterRaces.slice(4, 7).map(characterRace => {
                return (
                  <TouchableHighlight
                    key={characterRaces.indexOf(characterRace)}
                    onPress={() =>
                      this.handleChangeRace(
                        characterRace,
                        characterRaces.indexOf(characterRace)
                      )
                    }
                    value={characterRaces.indexOf(characterRace)}
                    style={
                      chosenRaceIndex === characterRaces.indexOf(characterRace)
                        ? { backgroundColor: '#707070' }
                        : { backgroundColor: 'transparent' }
                    }
                    underlayColor="#707070"
                  >
                    <PerfectDos style={styles.buttonText}>
                      {characterRace.name}
                    </PerfectDos>
                  </TouchableHighlight>
                );
              })}
            </View>
          </View>
          <View
            style={{ flex: 3, justifyContent: 'space-evenly', padding: 10 }}
          >
            <PerfectDos style={styles.descriptionText}>
              {raceObject.description}
            </PerfectDos>
          </View>
        </View>
        <View style={{ margin: 5 }} />
        <View style={{ flex: 0.3, justifyContent: 'space-around' }}>
          <Button
            onPress={() => this.completePageOne()}
            title="Next"
            color="white"
          />
        </View>
      </View>
    );
  }
}

export default CharacterCreationPageOne;

const styles = StyleSheet.create({
  borderContainer: {
    flex: 1,
    width: '100%',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  borderBox: {
    width: '100%',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    overflow: 'hidden',
  },
  optionBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  inputBox: {
    width: '100%',
    color: 'white',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'PerfectDos',
    fontSize: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  descriptionText: {
    // textAlign: 'left',
    color: 'white',
    fontSize: 20,
  },
});
