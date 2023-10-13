const duplicateArguments = require('./duplicateArguments');

describe('User Story 1: simple cases: 1 or 2 arguments', () => {
  it('UAT1.1: When I pass (1), Then it should return false', () => {
    expect(duplicateArguments(1)).toBe(false);
  });
  it('UAT1.2: When I pass (1, 1), Then it should return true', () => {
    expect(duplicateArguments(1, 1)).toBe(true);
  });
  it("UAT1.3: When I pass ('a','b'), Then it should return false", () => {
    expect(duplicateArguments('a', 'b')).toBe(false);
  });
  it("UAT1.4: When I pass ('b','b'), Then it should return true", () => {
    expect(duplicateArguments('b', 'b')).toBe(true);
  });
  it("UAT1.5: When I pass (2,'2'), Then it should return false", () => {
    expect(duplicateArguments(2, '2')).toBe(false);
  });
});
