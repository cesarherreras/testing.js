// matchers
test('test obj', () => {
  const data = {
    name: 'nico',
  };
  data.lastname = 'molina';
  expect(data).toEqual({
    name: 'nico',
    lastname: 'molina',
  });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
});

test('strings', () => {
  // Regular expresion
  expect('Christoph').toMatch(/stop/);
});

test('lists / arrays', () => {
  expect([3, 4, 5]).toContain(5);
});
