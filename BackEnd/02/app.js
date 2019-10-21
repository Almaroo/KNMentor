const getData = async () => {
  const resp = await fetch("./inputs.txt");
  const data = await resp.text();

  return data;
};

const kompresja = async () => {
  const input = await getData();
  var compressed = "";
  var prevChar;
  var counter = 0;

  const rows = input.split("\n").map(row => row);
  rows.forEach(row => {
    console.log(row);
    const charArr = [...row].filter(Boolean); //Zrobienie tablicy znaków ze stringa
    //Absolutnie nie mam pojecia dlaczego w tablicy zostaje "" <- null
    prevChar = charArr[0];

    charArr.forEach(char => {
      console.log(char);
      if (char === prevChar) {
        counter++;
      } else {
        compressed += prevChar;
        compressed += counter;
        counter = 1;
      }
      prevChar = char;
    });

    compressed += prevChar;
    compressed += counter;

    console.log(compressed);
    compressed = "";
    counter = 0;
  });
};

kompresja();
