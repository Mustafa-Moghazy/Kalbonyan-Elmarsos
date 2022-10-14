// Challenge 3

// const scoreDolphine = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphine, scoreKoalas);

// if (scoreDolphine > scoreKoalas) {
//   console.log("Dolphine Win the trophy");
// } else if (scoreDolphine < scoreKoalas) {
//   console.log("Koalas Win the trophy");
// } else if (scoreDolphine === scoreKoalas) {
//   console.log("Both Win the trophy");
// }

// bonus 1

const scoreDolphine = (87 + 101 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;

console.log(scoreDolphine, scoreKoalas);

if (scoreDolphine > scoreKoalas && scoreDolphine >= 100) {
  console.log("Dolphine Win the trophy");
} else if (scoreDolphine < scoreKoalas && scoreKoalas >= 100) {
  console.log("Koalas Win the trophy");
} else if (
  scoreDolphine === scoreKoalas &&
  scoreDolphine >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both Win the trophy");
} else {
  console.log("No one Win the trophy");
}
