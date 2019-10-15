import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import AdventureStart from '../screens/AdventureStart';
import CharacterCreation from '../screens/CharacterCreation/CharacterCreation';
import CharacterStats from '../screens/CharacterStats';
import Tutorial from '../screens/Tutorial';
import TileStyling from '../screens/TileStyling';
import MainGame from '../screens/MainGame';

export default createSwitchNavigator({
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  // Main: AdventureStart,
  // Main: TileStyling,
  // Main: Tutorial,
  Main: MainGame,
  CharacterCreation: CharacterCreation,
  CharacterStats: CharacterStats,
});
