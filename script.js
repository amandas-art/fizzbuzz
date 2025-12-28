const grid = document.getElementById("grid");
const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const darkModeBtn = document.getElementById("darkModeBtn");

// Clear the grid
function clearGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

// Generate FizzBuzz
function generateFizzBuzz() {
  clearGrid();

  const start = parseInt(document.getElementById("startValue").value);
  const end = parseInt(document.getElementById("endValue").value);
  const fizz = parseInt(document.getElementById("fizzValue").value);
  const buzz = parseInt(document.getElementById("buzzValue").value);

  // Input validation
  if (isNaN(start) || isNaN(end) || isNaN(fizz) || isNaN(buzz)) {
    alert("Please enter all numeric values.");
    return;
  }
  if (fizz <= 0 || buzz <= 0 || start > end) {
    alert("Please enter valid values: fizz > 0, buzz > 0, start ≤ end.");
    return;
  }

  // Generate boxes
  for (let i = start; i <= end; i++) {
    const div = document.createElement("div");
    div.id = `myid${i}`;
    div.classList.add("box");

    if (i % fizz === 0 && i % buzz === 0) {
      div.classList.add("fizzbuzz");
      div.innerText = "FizzBuzz";
    } else if (i % fizz === 0) {
      div.classList.add("fizz");
      div.innerText = "Fizz";
    } else if (i % buzz === 0) {
      div.classList.add("buzz");
      div.innerText = "Buzz";
    } else {
      div.classList.add("number");
      div.innerText = i;
    }

    grid.appendChild(div);
  }
}

// Event listeners
generateBtn.addEventListener("click", generateFizzBuzz);
clearBtn.addEventListener("click", clearGrid);
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkModeBtn.textContent = document.body.classList.contains("dark")
    ? "Light Mode"
    : "Dark Mode";
});

// Auto-generate on load if all input values exist
window.addEventListener("load", () => {
  const startVal = document.getElementById("startValue").value;
  const endVal = document.getElementById("endValue").value;
  const fizzVal = document.getElementById("fizzValue").value;
  const buzzVal = document.getElementById("buzzValue").value;

  if (startVal && endVal && fizzVal && buzzVal) {
    generateFizzBuzz();
  }
});
