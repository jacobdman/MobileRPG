import { observable, action, decorate } from 'mobx';

class GameStore {
  playerName = null;
  dungeon = false;
  inBuilding = false;
  darkColor = {
    background: ['#353535', '#353535'],
    primary: '#E5E5E5',
    grid: 'rgba(229, 229, 229, 0.2)',
  };
  lightColor = {
    background: ['#E5E5E5', '#E5E5E5'],
    primary: '#353535',
    grid: 'rgba(53, 53, 53, 0.3)',
  };
  gradientDemoColor = {
    background: ['#f6e183', '#bb9d78', '#848896', '#525f83', '#171c33'],
    primary: '#353535',
    grid: 'rgba(53, 53, 53, 0.3)',
  };
  color = this.gradientDemoColor;
  decisions = {};
  //****************Actions*****************************
  changeColor = (background = ['#353535', '#353535'], primary = '#fff') => {
    if (background === 'light') {
      this.color = this.lightColor;
    } else if (background === 'dark') {
      this.color = this.darkColor;
    } else {
      this.color = {
        background,
        primary,
      };
    }
  };
  makeDecision = (decision, choice = true) => {
    this.decisions[decision] = choice;
  };
}

export default decorate(new GameStore(), {
  playerName: observable,
  color: observable,
});
