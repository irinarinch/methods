import Bowerman from '../bowerman';

const bowerman = new Bowerman('Bowerman');
bowerman.getCharacter();

const instance = {
  name: 'Bowerman',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
  type: 'Bowerman',
};

test('creating an instance', () => {
  expect(bowerman).toEqual(instance);
});

const levelUpInstance = {
  name: 'Bowerman',
  health: 100,
  level: 2,
  attack: 30,
  defence: 30,
  type: 'Bowerman',
};

test('level up', () => {
  bowerman.levelUp();

  expect(bowerman).toEqual(levelUpInstance);
});

test('dead character', () => {
  bowerman.level = 0;

  function getError() {
    bowerman.levelUp();
  }

  expect(getError).toThrow(new Error("you can't level up a dead character"));
});

test('damaged character', () => {
  const bowerman2 = new Bowerman('Bowerman');
  bowerman2.getCharacter();

  bowerman2.damage(10);

  expect(bowerman2.health).toBe(92.5);
});

test('character without health', () => {
  bowerman.health = -1;
  bowerman.damage(10);

  expect(bowerman.health).toBe(-1);
});
