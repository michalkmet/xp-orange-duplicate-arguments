const duplicateArguments = require('./duplicateArguments');

describe('User Story 1: simple cases: 1 or 2 arguments', () => {
  it('UAT1.1: When I pass (1), Then it should return false', () => {
    expect(duplicateArguments(1)).toBe(false);
  });
  it('UAT1.2: When I pass (1, 1), Then it should return true', () => {
    expect(duplicateArguments(1, 1)).toBe(true);
  });
});
