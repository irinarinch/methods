import Daemon from '../daemon';

const daemon = new Daemon('Daemon');

const instance = {
  name: 'Daemon',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
  type: 'Daemon',
};

test('creating an instance', () => {
  expect(daemon).toEqual(instance);
});
