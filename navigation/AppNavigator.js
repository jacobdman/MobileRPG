import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import AdventureStart from '../screens/AdventureStart';
import CharacterCreation from '../screens/CharacterCreation/CharacterCreation';
import CharacterStats from '../screens/CharacterStats';

export default createSwitchNavigator({
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: AdventureStart,
  CharacterCreation: CharacterCreation,
  CharacterStats: CharacterStats,
});