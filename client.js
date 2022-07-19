$( document ).ready(printToDom);

function printToDom() {
  $( '#btn' ).on( 'click', display);
}

function display() {
  let employeeDisplay = $('#employeeBonus');
  employeeDisplay.empty();
  employeeDisplay.append(`<li>` + results.name, results.bonusPercentage +'%, $'+ results.totalCompensation +', '+ results.totalBonus + "%");
}

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

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.



function bonus(employees) {
  let employeePlusBonus = {};
  for (employee of employees) {
    if (employee.reviewRating <= 2) {
      let employeeBonusPerct = 0;
      let totalBon = Number(employee.annualSalary) * employeeBonusPerct
      let totalPay = Number(employee.annualSalary) + totalBon;
      employeePlusBonus.name = employee.name;
      employeePlusBonus.bonusPercentage = employeeBonusPerct;
      employeePlusBonus.totalCompensation = totalPay;
      employeePlusBonus.totalBonus = totalBon;
      } else if (employee.reviewRating <= 3) {
        let employeeBonusPerct = 0.04;
      if (employee.employeeNumber.length <= 4) {
        employeeBonusPerct += 0.05;
      }
      if (employee.annualSalary > 65000) {
        employeeBonusPerct -= 0.01;
      }
      if (employeeBonusPerct > .13) {
        employeeBonusPerct = .13;
      }
      let totalBon = Number(employee.annualSalary) * employeeBonusPerct
      let totalPay = Number(employee.annualSalary) + totalBon;
      employeePlusBonus.name = employee.name;
      employeePlusBonus.bonusPercentage = employeeBonusPerct;
      employeePlusBonus.totalCompensation = totalPay;
      employeePlusBonus.totalBonus = totalBon;
      } else if (employee.reviewRating <= 4) {
        let employeeBonusPerct = 0.06;
      if (employee.employeeNumber.length <= 4) {
        employeeBonusPerct += 0.05;
      }
      if (employee.annualSalary > 65000) {
        employeeBonusPerct -= 0.01;
      }
      if (employeeBonusPerct > .13) {
        employeeBonusPerct = .13;
      }
      let totalBon = Number(employee.annualSalary) * employeeBonusPerct
      let totalPay = Number(employee.annualSalary) + totalBon;
      employeePlusBonus.name = employee.name;
      employeePlusBonus.bonusPercentage = employeeBonusPerct;
      employeePlusBonus.totalCompensation = totalPay;
      employeePlusBonus.totalBonus = totalBon;
      } else if (employee.reviewRating <= 5) {
        let employeeBonusPerct = 0.10;
      if (employee.employeeNumber.length <= 4) {
        employeeBonusPerct += 0.05;
      }
      if (employee.annualSalary > 65000) {
        employeeBonusPerct -= 0.01;
      }
      if (employeeBonusPerct > .13) {
        employeeBonusPerct = .13;
      }
      let totalBon = Number(employee.annualSalary) * employeeBonusPerct
      let totalPay = Number(employee.annualSalary) + totalBon;
      employeePlusBonus.name = employee.name;
      employeePlusBonus.bonusPercentage = employeeBonusPerct;
      employeePlusBonus.totalCompensation = totalPay;
      employeePlusBonus.totalBonus = totalBon;
     }
    console.log(employeePlusBonus)
  }
  return employeePlusBonus;
}

let results = bonus(employees);
console.log(results);
console.log( employees );
