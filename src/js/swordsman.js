import Character from './character';

export default class Swordsman extends Character {
  constructor(name) {
    super();
    this.name = name;
    this.type = 'Swordsman';
  }
}
