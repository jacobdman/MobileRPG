import { observable, action, decorate } from 'mobx';
import characterCreation from '../models/characterCreation';

class CharacterStore {
  characterClasses = characterCreation.classes;
  characterRaces = characterCreation.races;
  //****************Actions*****************************
  saveCharacter = characterObj => {
    //Save character object to Async Storage
  };
}

export default decorate(new CharacterStore(), {
  characterClasses: observable,
  characterRaces: observable,
  saveCharacter: action,
});
