/*
 * JavaScript Practice Lab
 * Ten beginner exercises: arrays (1–3), objects (4–5),
 * functions (6–7), and DOM manipulation (8–10).
 */

// EXERCISE 1: Return the sum of all numbers in an array.
function sumArray(numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

// EXERCISE 2: Return the largest number in a non-empty array.
function findMaximum(numbers) {
  if (numbers.length === 0) {
    throw new Error("Please provide at least one number.");
  }
  return Math.max(...numbers);
}

// EXERCISE 3: Return an array containing unique values only.
function removeDuplicates(values) {
  return [...new Set(values)];
}

// EXERCISE 4: Read and format information from a student object.
function getStudentSummary(student) {
  return `${student.name} is in ${student.course} and scored ${student.marks}%`;
}

// EXERCISE 5: Count an object's own enumerable properties.
function countProperties(object) {
  return Object.keys(object).length;
}

// EXERCISE 6: Return whether an integer is even or odd.
function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    throw new Error("Enter a whole number.");
  }
  return number % 2 === 0 ? "even" : "odd";
}

// EXERCISE 7: Calculate the factorial of a non-negative integer.
// The interface limits input to 18 to keep the result within safe integer precision.
function factorial(number) {
  if (!Number.isInteger(number) || number < 0 || number > 18) {
    throw new Error("Enter a whole number from 0 to 18.");
  }
  let result = 1;
  for (let value = 2; value <= number; value += 1) {
    result *= value;
  }
  return result;
}

// A small helper keeps result messages consistent and safe to display.
function showResult(id, message) {
  document.getElementById(id).textContent = message;
}

// Example data for exercises 1–5.
const numbersForSum = [4, 8, 3, 5];
const numbersForMaximum = [12, 7, 29, 4, 18];
const languages = ["JS", "HTML", "JS", "CSS", "HTML"];
const student = { name: "Alex", course: "Computer Science", marks: 92 };
const sampleProfile = { name: "Alex", role: "Student", active: true };

// Exercise buttons use event listeners rather than inline HTML handlers.
document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.dataset.action) {
      case "array-sum":
        showResult("result-array-sum", `Sum = ${sumArray(numbersForSum)}`);
        break;
      case "array-max":
        showResult("result-array-max", `Maximum = ${findMaximum(numbersForMaximum)}`);
        break;
      case "array-unique":
        showResult("result-array-unique", `Unique values: ${JSON.stringify(removeDuplicates(languages))}`);
        break;
      case "object-student":
        showResult("result-object-student", getStudentSummary(student));
        break;
      case "object-count":
        showResult("result-object-count", `Property count = ${countProperties(sampleProfile)}`);
        break;
      case "function-even": {
        const rawValue = document.getElementById("even-number").value;
        const number = Number(rawValue);
        if (rawValue.trim() === "" || !Number.isInteger(number)) {
          showResult("result-function-even", "Please enter a whole number.");
          break;
        }
        showResult("result-function-even", `${number} is ${evenOrOdd(number)}.`);
        break;
      }
      case "function-factorial": {
        const rawValue = document.getElementById("factorial-number").value;
        const number = Number(rawValue);
        if (rawValue.trim() === "" || !Number.isInteger(number) || number < 0 || number > 18) {
          showResult("result-function-factorial", "Enter a whole number from 0 to 18.");
          break;
        }
        showResult("result-function-factorial", `${number}! = ${factorial(number)}`);
        break;
      }
      case "dom-heading": {
        const heading = document.getElementById("demo-heading");
        heading.textContent = "The heading was updated with JavaScript!";
        showResult("result-dom-heading", "Success: textContent changed the heading.");
        break;
      }
      case "dom-add-item": {
        const input = document.getElementById("item-input");
        const itemText = input.value.trim();
        if (!itemText) {
          showResult("result-dom-add-item", "Type an item before adding it.");
          input.focus();
          break;
        }
        const item = document.createElement("li");
        // textContent treats the input as text rather than executable HTML.
        item.textContent = itemText;
        document.getElementById("demo-list").appendChild(item);
        input.value = "";
        input.focus();
        showResult("result-dom-add-item", `Added: ${itemText}`);
        break;
      }
      case "counter-increase":
        updateCounter(1);
        break;
      case "counter-decrease":
        updateCounter(-1);
        break;
      case "counter-reset":
        counterValue = 0;
        renderCounter();
        showResult("result-dom-counter", "Counter reset to zero.");
        break;
    }
  });
});

// EXERCISE 10: Update the counter in response to button clicks.
let counterValue = 0;

function renderCounter() {
  document.getElementById("counter-value").textContent = String(counterValue);
}

function updateCounter(change) {
  counterValue += change;
  renderCounter();
  showResult("result-dom-counter", `Current count: ${counterValue}`);
}

// Run simple checks in the browser console when the page loads.
console.assert(sumArray([1, 2, 3]) === 6, "Exercise 1 test failed");
console.assert(findMaximum([-5, -2, -9]) === -2, "Exercise 2 test failed");
console.assert(JSON.stringify(removeDuplicates([1, 1, 2])) === JSON.stringify([1, 2]), "Exercise 3 test failed");
console.assert(countProperties({ a: 1, b: 2 }) === 2, "Exercise 5 test failed");
console.assert(evenOrOdd(8) === "even" && evenOrOdd(7) === "odd", "Exercise 6 test failed");
console.assert(factorial(0) === 1 && factorial(5) === 120, "Exercise 7 test failed");
