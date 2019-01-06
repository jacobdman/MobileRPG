import React, {Component} from 'react';
import {StyleSheet, View, Button, TouchableHighlight} from 'react-native';
import { PerfectDos } from '../../components/StyledText';

class CharacterCreationPageTwo extends Component {
  state = {
    chosenSkin: ''
  }

  handleChangeSkin = (skinId) => {
    this.setState({ chosenSkin: skinId });
  }

  completePageTwo = () => {
    this.props.completePageTwo(this.state.skinId);
  }

  previousPage = () => {
    this.props.previousPage();
  }

  previousSkin = () => {
    //Cycle between skins
  }

  nextSkin = () => {
    //Cycle between skins
  }

  render() {
    return (
      <View style={[styles.borderContainer]}>
        <PerfectDos style={[styles.buttonText, {flex: 0.5}]}>Choose a Skin</PerfectDos>
        <View style={[styles.borderBox, {flex: 8}]}>
          <View style={{flex: 9}}>
            {/* Character image goes here */}
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '70%'}}>
            <TouchableHighlight
              onPress={() => this.previousSkin()}
              // style={styles.directionButton}
              underlayColor="#707070"
            >
              <PerfectDos style={styles.directionButton}>{'<'}</PerfectDos>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.nextSkin()}
              // style={styles.directionButton}
              underlayColor="#707070"
            >
              <PerfectDos style={styles.directionButton}>{'>'}</PerfectDos>
            </TouchableHighlight>
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
            onPress={() => this.completePageTwo()}
            title="Next"
            color="white"
          />
        </View>
      </View>
    );
  }
}

export default CharacterCreationPageTwo;

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
});
