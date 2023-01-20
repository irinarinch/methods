import Character from './character';

export default class Undead extends Character {
  constructor(name) {
    super();
    this.name = name;
    this.type = 'Undead';
  }
}
