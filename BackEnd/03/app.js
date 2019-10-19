const getData = async () => {
  const resp = await fetch("./inputs.txt");
  const data = await resp.text();

  return data;
};

const kompresja = async () => {
  const input = await getData();

  input.split("\n").forEach(row => {
    var number = Number(row);
    if (isPrime(number)) console.log(`${number}: TAK`);
    else console.log(`${number}: NIE`);
  });
};

const isPrime = number => {
  for (var i = 2; i * i <= number; i++) {
    if (number % i == 0) return false;
  }

  if (number == 1) return false;
  else return true;
};

kompresja();
