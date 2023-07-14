import Validator from '../basic';

/* test('testing function validateUsername', () => {
  const user = new Validator('kjh1-191d_h');
  expect(user.validateUsername()).toBe(true);
}); */

test.each([
  ['kjh1-191_H', ' - латинские буквы, -, _, цифры (0-9), подряд три цифры, начинается и заканчивается латинской буквой, разный регистр', true],
  ['k--l', ' - латинские буквы, -, начинается и заканчивается латинской буквой', true],
  ['kjh1-1951_h', ' - подряд более 3 цифр', false],
  ['kjh1-1951_', ' - заканчивается не буквой', false],
  ['1-1951_h', ' - начинается не с буквы', false],
])('%s  %s', (name, description, expected) => {
  const user = new Validator(name);
  expect(user.validateUsername()).toBe(expected);
});
