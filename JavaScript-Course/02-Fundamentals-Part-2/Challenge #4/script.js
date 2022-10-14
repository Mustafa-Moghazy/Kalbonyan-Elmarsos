// challenge 4//

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [],
  totals = [];
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = bills[i] + tips[i];
}

console.log(bills, tips, totals);

const calcAvg = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) sum += arr[i];

  return sum / arr.length;
};

console.log(calcAvg(totals));
