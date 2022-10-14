// Challenge 2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

console.log(bmiJohn, bmiMark);

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) heigher than John's (${bmiJohn})`);
} else {
  console.log(`John's BMI (${bmiJohn}) heigher than Mark's (${bmiMark})`);
}
