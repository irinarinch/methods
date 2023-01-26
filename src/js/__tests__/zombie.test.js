import Zombie from '../zombie';

const zombie = new Zombie('Zombie');

const instance = {
  name: 'Zombie',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
  type: 'Zombie',
};

test('creating an instance', () => {
  expect(zombie).toEqual(instance);
});
