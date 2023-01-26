import Character from '../character';

let character;

test('type of name', () => {
  character = new Character('DaemonName', 'Daemon');

  expect.stringContaining(character.name);
});

test('length of name', () => {
  function getError() {
    character = new Character('DaemonNameDaemonName', 'Daemon');
  }

  expect(getError).toThrow(new Error('Invalid name'));
});

test('match an array of types', () => {
  function getError() {
    character = new Character('DaemonName', 'DaemonDaemon');
  }

  expect(getError).toThrow(new Error('Incorrect type'));
});
