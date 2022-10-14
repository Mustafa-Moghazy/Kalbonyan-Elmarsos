"use strict";

const printForecast = (arr) => {
  let string = "";
  for (let i = 0; i < arr.length; ++i) {
    string += `...${arr[i]}C in ${i + 1} day`;
  }
  return string;
};

let Data = [17, 21, 23];
let Data2 = [12, 5, -5, 0, 4];

console.log(printForecast(Data) + "...");
console.log(printForecast(Data2) + "...");
