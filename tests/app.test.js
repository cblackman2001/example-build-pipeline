const sayHello = require('../src/app');

test('returns hello world', () => {
  expect(sayHello()).toBe("Hello world");
});
