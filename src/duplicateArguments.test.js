const duplicateArguments = require('./duplicateArguments');

describe('hello', () => {
  it('should return hello', () => {
    expect(duplicateArguments()).toBe('hello');
  });
});
