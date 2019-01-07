import { observable, action, decorate } from 'mobx';
import _ from 'lodash';

class CharacterStore {
  characterClasses = [
    {
      name: 'Assassin',
      description: 'A sneaky and small thief with an eye for treasure.',
      priorityStat: 'Dexterity (DEX)',
      proficiencies: ['knives', 'thievesTools', 'lockPicking', 'pickPocketing'],
      startingItems: ['dagger'],
    },
    {
      name: 'Barbarian',
      description: 'The toughest of them all. A barbarian would rather solve his problems with violence.',
      priorityStat: 'Strength (STR)',
      proficiencies: ['blunt', 'strength', 'intimidation'],
      startingItems: ['club'],
    },
    {
      name: 'Bard',
      description: 'A music loving enchanter who casts spells and status effects on friends and enemies alike.',
      priorityStat: 'Charisma (CHA) and Wisdom (WIS)',
      proficiencies: ['instruments', 'spells', 'enchantments'],
      startingItems: ['instrument'],
    },
    {
      name: 'Cleric',
      description: 'A preist who fights with divine magic and heavy weapons.',
      priorityStat: 'Wisdom (WIS)',
      proficiencies: ['religious', 'healing'],
      startingItems: ['religious'],
    },
    {
      name: 'Druid',
      description: 'A silent fighter who uses the powers of nature.',
      priorityStat: 'Wisdom (WIS)',
      proficiencies: [],
      startingItems: [],
    },
    {
      name: 'Fighter',
      description: 'A jack of all trades, skilled in many types of weapons and armor.',
      priorityStat: 'Strength (STR) and/or Dexterity (DEX)',
      proficiencies: [],
      startingItems: [],
    },
    {
      name: 'Monk',
      description: 'A master of hand-to-hand combat, the monk prefers to fight with his fists.',
      priorityStat: 'Strength (STR)',
      proficiencies: [],
      startingItems: [],
    },
    {
      name: 'Paladin',
      description: 'A holy warrior who derives powers from their god.',
      priorityStat: 'Strength (STR)',
      proficiencies: [],
      startingItems: [],
    },
    {
      name: 'Ranger',
      description: 'A ranged fighter who spends most their time far from civilization.',
      priorityStat: 'Dexterity (DEX)',
      proficiencies: [],
      startingItems: [],
    },
    {
      name: 'Wizard',
      description: 'A powerful magic-user who learns spells from their school of choice.',
      priorityStat: 'Intelligence (INT)',
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
      description: 'Small and stalwart, Dwarves are bold warriors known for their percise metal work.',
      traits: '',
    },
    {
      name: 'Elf',
      description: 'Divine and magical, Elves have the traits to back-up their arrogance.',
      traits: '',
    },
    {
      name: 'Half-Elf',
      description: 'Half Human, strong and brave; half Elf, magical and graceful.',
      traits: '',
    },
    {
      name: 'Halfling',
      description: "Halflings are very social but get uncomfortable the longer they're away from home",
      traits: '',
    },
    {
      name: 'Human',
      description: 'The most adaptable species, humans are known for their persistence and bravery.',
      traits: '',
    },
    {
      name: 'Changeling',
      description: 'A shape-shifter. Most changelings never know their true forms.',
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
