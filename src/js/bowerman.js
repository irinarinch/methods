import Character from './character';

export default class Bowerman extends Character {
  constructor(name) {
    super();
    this.name = name;
    this.type = 'Bowerman';
  }
}
