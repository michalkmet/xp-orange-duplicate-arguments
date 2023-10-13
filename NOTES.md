# Notes

Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function.

The array values passed in will only be strings or numbers. The only valid return values are true and false.

Examples:

solution(1, 2, 3)             -->  false
solution(1, 2, 3, 2)          -->  true
solution('1', '2', '3', '2')  -->  true

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

Pomodoro 1:

- ✅ DONE Plan pomodoro 1
- ✅ DONE add project description
- ✅ DONE initial refactor
- ✅ DONE examples
- ✅ DONE user stories
User Story 1: simple cases: 1 or 2 arguments
As a user, I want to pass in 1 or 2 arguments, so that I can see if there are any duplicates
- ✅ DONE UAT1.1: When I pass (1), Then it should return false
- ✅ DONE UAT1.2: When I pass (1, 1), Then it should return true
- ✅ DONE UAT1.3: When I pass ('a','b'), Then it should return false
- ✅ DONE UAT1.4: When I pass ('b','b'), Then it should return true
- ✅ DONE UAT1.5: When I pass (2,'2'), Then it should return false