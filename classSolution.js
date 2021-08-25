const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

// 1 - Loop over all employees
for (let employee of employees) {
  console.log(employees);
}

// 2 - Create a function that takes in an object and returns and object
/**
 * 
 * @param {object} employeeInput Employee to process
 * @return {object} Object with bonus information
 */
function processEmployeeBonus(employeeInput) {
  employeeInput.bonusPercentage = 0;
  if (employeeInput.reviewRating <= 2) {
    employeeInput.bonusPercentage = 0.0;
  } else if (employeeInput.reviewRating === 3) {
    employeeInput.bonusPercentage = 0.04;
  } else if (employeeInput.reviewRating === 4) {
    employeeInput.bonusPercentage = 0.06;
  } else if (employeeInput.reviewRating === 5) {
    employeeInput.bonusPercentage = 0.10;
  }
  if (employeeInput.employeeNumber.length === 4) {
    employeeInput.bonusPercentage += 0.05;
  }
  if (employeeInput.annualSalary > 65000) {
    employeeInput.bonusPercentage -= .01;
  }
  if (employeeInput.bonusPercentage > 0.13) {
    employeeInput.bonusPercentage = 0.13;
  } 
  employeeInput.totalBonus = employeeInput.annualSalary * employeeInput.bonusPercentage;
  employeeInput.totalCompensation = parseInt(employeeInput.annualSalary) + parseInt(employeeInput.totalBonus);
  // for rounding errors can use tofixed...employeeInput.bonusPercentage.toFixed(2)
  return employeeInput;
}
console.log(processEmployeeBonus(employees[2]));
console.log(processEmployeeBonus(employees[0]));

  // 3 - Calculate the bonus
  // 4 - Move that calculation into a separate funciton
  // 5 - Write some tests
