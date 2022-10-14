//challenge 1
// const calcAverage = (s1, s2, s3) => {
//   return (s1 + s2 + s3) / 3;
// };
const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

let scoreDolphine = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphine, scoreKoalas);

const checkWineer = function (scoreDolphine, scoreKoalas) {
  if (scoreDolphine >= 2 * scoreKoalas) {
    console.log("Dolphine Win");
  } else if (scoreKoalas >= 2 * scoreDolphine) {
    console.log("Koalas Win");
  } else {
    console.log("No one Win");
  }
};

checkWineer(scoreDolphine, scoreKoalas);

// test 2
scoreDolphine = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWineer(scoreDolphine, scoreKoalas);
