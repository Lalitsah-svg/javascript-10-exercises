# JavaScript Practice Lab — 10 Exercises

A beginner-friendly project that demonstrates ten JavaScript exercises across arrays, objects, functions, and DOM manipulation. It uses plain HTML, CSS, and JavaScript, with no build tools or third-party JavaScript dependencies.

## Exercises included

| # | Topic | Exercise | Main concept |
|---|---|---|---|
| 1 | Arrays | Sum an array | `reduce()` |
| 2 | Arrays | Find the maximum | `Math.max()` and spread syntax |
| 3 | Arrays | Remove duplicates | `Set` |
| 4 | Objects | Student profile summary | Object properties and template literals |
| 5 | Objects | Count properties | `Object.keys()` |
| 6 | Functions | Check even or odd | Remainder operator and validation |
| 7 | Functions | Calculate factorial | Loop, return values, input validation |
| 8 | DOM | Change a heading | `getElementById()` and `textContent` |
| 9 | DOM | Add list items | Events, `createElement()`, `appendChild()` |
| 10 | DOM | Interactive counter | Click events and updating the DOM |

## How to run

1. Download or extract the project folder.
2. Open `index.html` in a modern web browser.
3. Click the exercise buttons and try different inputs for exercises 6 and 7.

No Node.js installation, package installation, or internet connection is required to run the core project. The optional Google Fonts import in `style.css` uses the internet; the page remains usable with system fonts if it cannot load.

## Project files

- `index.html` — page structure and exercise controls.
- `style.css` — responsive styling.
- `script.js` — exercise solutions, event handlers, validation, and basic console assertions.
- `WHAT_I_LEARNED.md` — short reflection for submission.

## Testing checklist

- [ ] Run each of the ten exercise buttons.
- [ ] Check even and odd inputs, including a negative integer.
- [ ] Check factorial inputs `0`, `5`, and an invalid value such as `-1`.
- [ ] Try adding a list item with normal text and with an empty input.
- [ ] Increase, decrease, and reset the counter.
- [ ] Open browser developer tools and confirm there are no unexpected errors.

## Notes

The factorial input is limited to 0–18 so results remain within JavaScript's safe integer range. The examples are intentionally small and use descriptive function names to make the logic easy to review.
