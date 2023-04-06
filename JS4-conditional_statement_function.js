// Create function that takes in one argument
// that is passed through a conditional statement.
// Return the result as an alert or console.log.
// Test all of your conditions to make sure
// you can receive all of your results back. 

// define a function that checks the number type
function numberType(num) {
	// case1: it is a positive number
  if (num > 0) {
    return "The number is positive.";
    // case2: it is a negtive number
  } else if (num < 0) {
    return "The number is negative.";
    // case3: the number is zero
  } else {
    return "The number is zero.";
  }
}

// console.log case 1
console.log(numberType(5));

// case2 console.log can be
	// console.log(numberType(-1))
// case3 console.log can be
	// console.log(numberType(0))