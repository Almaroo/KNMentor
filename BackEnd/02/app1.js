//Absolutnie nie wiem co tu się dzieje
const testArr = [1, "2", , 4, undefined, null, 5, 7, ""];

console.log(testArr);

testArr.forEach(el => {
  console.log(typeof el);
});

console.log(Number(testArr[testArr.length - 1]));

const clearedArr = testArr.filter(Boolean);

console.log(clearedArr);
