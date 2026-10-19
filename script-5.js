
// Function with two parameters
function multiply(number1, number2) {

    // Multiply the two parameters
    return number1 * number2;
}

// Function to get input values and display the result
function calculateMultiplication() {

    // Get the values entered by the user
    let firstNumber = Number(
        document.getElementById("number1").value
    );

    let secondNumber = Number(
        document.getElementById("number2").value
    );

    // Call the function and pass arguments
    let answer = multiply(firstNumber, secondNumber);

    // Display the answer on the webpage
    document.getElementById("result").textContent =
        firstNumber + " * " + secondNumber + " = " + answer;
}