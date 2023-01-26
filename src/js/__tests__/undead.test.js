import Undead from '../undead';

const undead = new Undead('Undead');

const instance = {
  name: 'Undead',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
  type: 'Undead',
};

test('creating an instance', () => {
  expect(undead).toEqual(instance);
});
