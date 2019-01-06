import { observable, action, decorate } from 'mobx';
import _ from 'lodash';

class CharacterStore {
  characterClasses = [
    {
      name: 'Assassin',
      description: 'A sneaky and small thief with an eye for treasure. Should have high Dexterity, but low Strength stats.',
      priorityStat: 'Dexterity (DEX)',
      proficiencies: ['knives', 'thievesTools', 'lockPicking', 'pickPocketing'],
      startingItems: ['dagger'],
    },
    {
      name: 'Barbarian',
      description: 'The toughest of them all. A barbarian would rather solve his problems with violence. The only stat that should be prioritized is Strength.',
      priorityStat: 'Strength (STR)',
      proficiencies: ['blunt', 'strength', 'intimidation'],
      startingItems: ['club'],
    },
    {
      name: 'Bard',
      description: 'A music loving enchanter who casts spells and status effects on friends and enemies alike. Should have high Charisma and Wisdom, and low Strength.',
      priorityStat: 'Charisma (CHA) and Wisdom (WIS)',
      proficiencies: ['instruments', 'spells', 'enchantments'],
      startingItems: ['instrument'],
    },
    {
      name: 'Cleric',
      description: 'A holy warrior who gets their powers from the god they worship. Should have high Wisdom, but low Strength.',
      priorityStat: 'Wisdom (WIS)',
      proficiencies: ['religious', 'healing'],
      startingItems: ['religious'],
    },
    {
      name: 'Fighter',
      description: '',
      priorityStat: '',
      proficiencies: [],
      startingItems: [],
    },
    {
      name: 'Necromancer',
      description: '',
      priorityStat: '',
      proficiencies: [],
      startingItems: [],
    },
    {
      name: 'Monk',
      description: '',
      priorityStat: '',
      proficiencies: [],
      startingItems: [],
    },
    {
      name: 'Paladin',
      description: '',
      priorityStat: '',
      proficiencies: [],
      startingItems: [],
    },
    {
      name: 'Ranger',
      description: '',
      priorityStat: '',
      proficiencies: [],
      startingItems: [],
    },
    {
      name: 'Wizard',
      description: '',
      priorityStat: '',
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
  saveCharacter = (characterObj) => {
    //Save character object to Async Storage
  };
}

export default decorate(new CharacterStore(), {
  characterClasses: observable,
  characterRaces: observable,
  saveCharacter: action,
});
