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


/**
 * Write a function to loop through employee array and calculate bonus, return calculated values
 * 
 * @param employees
 * @returns `bonusPercentage`, `totalCompensation`, `totalBonus` to employee array
 * 
 *  // rating < 2 : no bonus
 // rating = 3 : 4% bonus
 // rating = 4 : 6% bonus
 // rating = 5 : 10% bonus
 // employeeNumber.length = 4 : (rating bonus) + (5% * salary)
 // bonusPercentage += .05
 // income > 65,000 : bonus = (bonus) - (bonus * .01)
 // maxBonus = 13%
 // min bonus = 0%

 * use each employee object as the input to the function described below.
* `console.log` the results of each iteration.

* Add `bonusPercentage`, `totalCompensation`, `totalBonus` to * employee array

 */
const maxBonus = .13;


function calculateAndAddBonusInformation(array) {
  for (let item of array) {
    // bonusPercentage = item.bonusPercentage;
    // totalCompensation = item.totalCompensation;
    // totalBonus = item.totalBonus;
    console.log(item.employeeNumber);
    if (item.reviewRating < 2) {
      item.bonusPercentage = 0;
    }
    if (item.reviewRating === 3) {
      item.bonusPercentage = 0.04;
    }
    if (item.reviewRating === 4) {
      item.bonusPercentage = 0.06;
    }
    if (item.reviewRating === 5) {
      item.bonusPercentage = 0.1;
    }
    if (item.employeeNumber.length === 4) {
      item.bonusPercentage += 0.05;
    }
    if (item.annualSalary > 65000 ){
      item.bonusPercentage *= .99;
    }
    if (item.bonusPercentage >= maxBonus)  {
      item.bonusPercentage = .13;
    }
    if (item.bonusPercentage < 0) {
      item.bonusPercentage = 0;
    }
  item.totalBonus = "$" + (item.annualSalary * item.bonusPercentage);
  } return array
}



console.log(calculateAndAddBonusInformation(employees));
console.log(employees);
