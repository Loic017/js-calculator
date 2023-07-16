// Calculator Numbers
const numbers = document.querySelectorAll("#number");

// Calculator Operators
const operators = document.querySelectorAll("#operator");

// Screen
const screen = document.getElementById("screen");

// Calculation
let calc = "";

// Result
let result = 0;

// Check for button event click on numbers
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        const input = number.innerText;
        if (input !== "=") {
            calc += input;
        }

        // console.log(calc);
        if (number.innerText === "=") {
            // console.log(input);
            while (calc.includes("÷")) {
                calc = calc.replace("÷", "/");
            }
            while (calc.includes("x")) {
                calc = calc.replace("x", "*");
            }
            // console.log(calc);
            result = eval(calc);
            screen.innerText = result;
            return;
        }

        if (
            screen.innerText > 0 &&
            !screen.innerText.includes("-") &&
            !screen.innerText.includes("+") &&
            !screen.innerText.includes("x") &&
            !screen.innerText.includes("÷")
        ) {
            screen.innerText = screen.innerText + input;
            return;
        }

        if (screen.innerText.includes("+" || "-" || "*" || "÷")) {
            screen.innerText = screen.innerText + number.innerText;
            return;
        }

        screen.innerText = input;
        // console.log(calc);
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        const input = operator.innerText;

        if (screen.innerText.length === 0) {
            return;
        }

        if (
            screen.innerText.includes("-") ||
            screen.innerText.includes("+") ||
            screen.innerText.includes("x") ||
            screen.innerText.includes("÷")
        ) {
            return;
        }

        if (calc.length > 2) {
            while (calc.includes("÷")) {
                calc = calc.replace("÷", "/");
            }
            while (calc.includes("x")) {
                calc = calc.replace("x", "*");
            }
            console.log(calc);
            screen.innerText = eval(calc) + input;
            calc = eval(calc) + input;
            return;
        }
        screen.innerText = screen.innerText + input;
        calc = calc + input;
    });
});
