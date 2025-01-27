import { Hello } from '../src';

test('hello', () => {
  expect(new Hello().sayHello()).toBe(
    'hello, world, does this bump patch version?',
  );
});
