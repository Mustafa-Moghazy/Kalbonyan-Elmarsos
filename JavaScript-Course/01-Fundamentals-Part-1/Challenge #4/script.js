// Challenge 4

const bill = 275;
const bill2 = 40;
const bill3 = 430;

const tip = bill <= 300 && bill >= 50 ? bill * (15 / 100) : bill * (20 / 100);

console.log(
  ` the bill value ${bill}, the tip was ${tip} and the total value equal ${
    bill + tip
  } `
);
