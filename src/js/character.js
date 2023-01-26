export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    Character.types = [
      'Bowerman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (Character.types.includes(this.type)) {
      this.health = 100;
      this.level = 1;
    } else {
      throw new Error('Incorrect type');
    }

    if ((typeof name !== 'string') || (name.length > 10 || name.length < 2)) {
      throw new Error('Invalid name');
    }
  }

  levelUp() {
    if (this.level === 0) {
      throw new Error("you can't level up a dead character");
    }

    this.level += 1;
    this.attack += (this.attack * 0.2);
    this.defence += (this.defence * 0.2);
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
