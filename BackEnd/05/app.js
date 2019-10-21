const getData = async () => {
  const resp = await fetch("./inputs.txt");
  const data = await resp.text();

  return data;
};

const ostatniaNieZerowaSilni = async () => {
  const input = await getData();
  console.time("quasisilnia");
  input.split("\n").forEach(row => {
    var number = Number(row);
    var lastNonZeroDigit = quasiFactorial(number);
    console.log(`Last non-zero digit of ${number}! -> ${lastNonZeroDigit}`);
  });
  console.timeEnd("quasisilnia"); //circa 5ms na przeliczenie od 0 do 50
};

//Quasi silnia
const quasiFactorial = n => {
  //Klasyczna rekurencja na silni

  if (n >= 1) {
    var tmp = n * quasiFactorial(n - 1);
    //Jeżeli liczba będzie miała jedno lub więcej zer na końcu to je ucinamy
    while (tmp % 10 === 0) {
      tmp /= 10;
    }

    //Po usunięciu wszystkich zer przekazujemy dalej ostatnią niezerową liczbę silni, ponieważ tylko ona będzie wpływała na kolejną ostatnią niezerową liczbę silni
    return tmp % 10;
  } else return 1;
};

ostatniaNieZerowaSilni();
