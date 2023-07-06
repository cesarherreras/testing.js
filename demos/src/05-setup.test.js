describe('Set', () => {
  //   beforeEach(() => {
  //     console.log('beforeEach');
  //   });
  test('case 1', () => {
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    expect(1 + 3).toBe(4);
  });
  describe('Set 2', () => {
    test('case 3', () => {
      expect(1 + 1).toBe(2);
    });
    test('case 4', () => {
      expect(1 + 3).toBe(4);
    });
  });
});
