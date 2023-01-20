import Swordsman from '../swordsman';

const swordsman = new Swordsman('Swordsman');
swordsman.getCharacter();

const instance = {
  name: 'Swordsman',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
  type: 'Swordsman',
};

test('creating an instance', () => {
  expect(swordsman).toEqual(instance);
});
