import Character from './character';

export default class Zombie extends Character {
  constructor(name) {
    super();
    this.name = name;
    this.type = 'Zombie';
  }
}
