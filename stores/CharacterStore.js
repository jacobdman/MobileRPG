import { observable, action, decorate } from 'mobx';
import _ from 'lodash';

class CharacterStore {
  characterClasses = [
    {
      name: 'Assassin',
      description: 'A sneaky and small thief with an eye for treasure. Should have high Dexterity, but low Strength stats.',
      proficiencies: ['knives', 'thievesTools', 'lockPicking', 'pickPocketing'],
      startingItems: ['dagger'],
    },
    {
      name: 'Barbarian',
      description: 'The toughest of them all. A barbarian would rather solve his problems with violence. The only stat that should be prioritized is Strength.',
      proficiencies: ['blunt', 'strength', 'intimidation'],
      startingItems: ['club'],
    },
    {
      name: 'Bard',
      description: 'A music loving enchanter who casts spells and status effects on friends and enemies alike. Should have high Charisma and Wisdom, and low Strength.',
      proficiencies: ['instruments', 'spells', 'enchantments'],
      startingItems: ['instrument'],
    },
    {
      name: 'Cleric',
      description: 'A holy warrior who gets their powers from the god they worship. Should have high Wisdom, but low Strength.',
      proficiencies: ['religious', 'healing'],
      startingItems: ['religious'],
    },
    {
      name: 'Fighter',
      description: '',
      proficiencies: [],
      startingItems: [],
    },
    {
      name: 'Necromancer',
      description: '',
      proficiencies: [],
      startingItems: [],
    },
    {
      name: 'Monk',
      description: '',
      proficiencies: [],
      startingItems: [],
    },
    {
      name: 'Paladin',
      description: '',
      proficiencies: [],
      startingItems: [],
    },
    {
      name: 'Ranger',
      description: '',
      proficiencies: [],
      startingItems: [],
    },
    {
      name: 'Wizard',
      description: '',
      proficiencies: [],
      startingItems: [],
    },
  ];
  characterRaces = [
    {
      name: 'Dragonborn',
      description: 'The descendants of dragons, the Dragonborn are a noble and proud race of reptilian humanoids.',
      traits: '',
    },
    {
      name: 'Dwarf',
      description: '',
      traits: '',
    },
    {
      name: 'Elf',
      description: '',
      traits: '',
    },
    {
      name: 'Half-Elf',
      description: '',
      traits: '',
    },
    {
      name: 'Halfling',
      description: '',
      traits: '',
    },
    {
      name: 'Human',
      description: '',
      traits: '',
    },
    {
      name: 'Changling',
      description: '',
      traits: '',
    },
  ];
  //****************Actions*****************************
}

export default decorate(new CharacterStore(), {
  characterClasses: observable,
  characterRaces: observable,
});
