# Awesome repo

Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function.

The array values passed in will only be strings or numbers. The only valid return values are true and false.

Examples:
```
duplicateArguments(1) -->  false
duplicateArguments(1,1) -->  true
duplicateArguments('a','b') -->  false
duplicateArguments('b','b') -->  true
duplicateArguments(2,'2') -->  false
duplicateArguments(1, 2, 3)             -->  false
duplicateArguments(1, 2, 3, 2)          -->  true
duplicateArguments('1', '2', '3', '2')  -->  true
duplicateArguments('a', 'b', 'c', 'd', 'A')  -->  false
duplicateArguments('a', 'b', 'c', 'd', 'a')  -->  true

```

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog

User Stories:

User Story 1: simple cases: 1 or 2 arguments

As a user, I want to pass in 1 or 2 arguments, so that I can see if there are any duplicates
- ✅ DONE UAT1.1: When I pass (1), Then it should return false
- ✅ DONE UAT1.2: When I pass (1, 1), Then it should return true
- ✅ DONE UAT1.3: When I pass ('a','b'), Then it should return false
- ✅ DONE UAT1.4: When I pass ('b','b'), Then it should return true
- ✅ DONE UAT1.5: When I pass (2,'2'), Then it should return false

User Story 2: more than 2 arguments
As a user, I want to pass in more than 2 arguments, so that I can see if there are any duplicates
- ✅ DONE UAT2.1: When I pass (1, 2, 3), Then it should return false
- ✅ DONE UAT2.2: When I pass (1, 2, 3, 2), Then it should return true
- ✅ DONE UAT2.3: When I pass ('1', '2', '3', '2'), Then it should return true
- ✅ DONE UAT2.4: When I pass ('a', 'b', 'c', 'd', 'A'), Then it should return false
- ✅ DONE UAT2.5: When I pass ('a', 'b', 'c', 'd', 'a'), Then it should return true