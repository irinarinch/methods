import Magician from '../magician';

const magician = new Magician('Magician');
magician.getCharacter();

const instance = {
  name: 'Magician',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
  type: 'Magician',
};

test('creating an instance', () => {
  expect(magician).toEqual(instance);
});
